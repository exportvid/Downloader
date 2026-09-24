import type { ApiErrorBody, ExtractionResult } from '@exportvid/shared';
import { API_BASE_URL } from './config';

export class ExtractionApiError extends Error {
  constructor(
    message: string,
    public readonly code: ApiErrorBody['error']['code'],
  ) {
    super(message);
  }
}

export async function extractMedia(url: string, turnstileToken: string | undefined, signal?: AbortSignal): Promise<ExtractionResult> {
  const res = await fetch(`${API_BASE_URL}/api/v1/extract`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url, turnstileToken }),
    signal,
  });

  const body = await res.json();
  if (!res.ok) {
    const err = body as ApiErrorBody;
    throw new ExtractionApiError(err.error?.message ?? 'Extraction failed', err.error?.code ?? 'INTERNAL_ERROR');
  }
  return body as ExtractionResult;
}

export type PrepareResult = { kind: 'direct'; url: string } | { kind: 'merge'; jobId: string };

/**
 * Always call this before downloading. It resolves instantly either way:
 * a direct asset returns a ready-to-navigate URL, a merge-required asset
 * returns a jobId to poll. This keeps the actual file bytes flowing straight
 * from the API to the browser via native navigation — never through a JS
 * fetch that would buffer the whole file in memory.
 */
export async function prepareDownload(requestId: string, assetId: string): Promise<PrepareResult> {
  const params = new URLSearchParams({ requestId, assetId });
  const res = await fetch(`${API_BASE_URL}/api/v1/download/prepare?${params.toString()}`);
  const body = await res.json();
  if (res.status === 202) return { kind: 'merge', jobId: body.jobId };
  if (res.ok) return { kind: 'direct', url: `${API_BASE_URL}${body.url}` };
  const err = body as ApiErrorBody;
  throw new ExtractionApiError(err.error?.message ?? 'Could not prepare download', err.error?.code ?? 'INTERNAL_ERROR');
}

export interface JobStatus {
  status: 'processing' | 'completed' | 'failed';
  downloadUrl?: string;
  error?: string;
}

export async function pollJob(jobId: string, signal?: AbortSignal): Promise<JobStatus> {
  const res = await fetch(`${API_BASE_URL}/api/v1/jobs/${jobId}`, { signal });
  if (!res.ok) {
    const err = (await res.json()) as ApiErrorBody;
    throw new ExtractionApiError(err.error?.message ?? 'Could not check the download', err.error?.code ?? 'INTERNAL_ERROR');
  }
  const body: JobStatus = await res.json();
  if (body.downloadUrl && body.downloadUrl.startsWith('/')) {
    body.downloadUrl = `${API_BASE_URL}${body.downloadUrl}`;
  }
  return body;
}
