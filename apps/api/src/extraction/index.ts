import { detectPlatform } from '@exportvid/shared';
import { config } from '../config';
import { assertSafeUrl, UnsafeUrlError } from '../lib/urlSafety';
import { fetchInfo, YtDlpError } from './ytdlp';
import { normalizeYtDlpResult, type NormalizedExtraction } from './normalize';

export class ExtractionInputError extends Error {
  constructor(
    message: string,
    public readonly code: 'UNSUPPORTED_URL' | 'INVALID_URL' | 'PRIVATE_OR_PROTECTED_CONTENT' | 'NOT_FOUND' | 'EXTRACTION_FAILED' | 'TIMEOUT',
  ) {
    super(message);
  }
}

/**
 * Full pipeline for a user-submitted URL: detect platform, validate it can't
 * be used for SSRF, run yt-dlp, normalize into our schema. Never touches
 * private/login-gated content — yt-dlp is invoked with no cookies/auth, so
 * anything that requires a session simply fails as PRIVATE_OR_PROTECTED.
 */
export async function runExtraction(rawUrl: string): Promise<NormalizedExtraction> {
  const match = detectPlatform(rawUrl);
  if (!match) {
    throw new ExtractionInputError('Unsupported or unrecognized URL', 'UNSUPPORTED_URL');
  }

  try {
    await assertSafeUrl(rawUrl);
  } catch (e) {
    if (e instanceof UnsafeUrlError) {
      throw new ExtractionInputError(e.message, 'INVALID_URL');
    }
    throw e;
  }

  let info;
  try {
    info = await fetchInfo(rawUrl, { timeoutMs: config.EXTRACTION_TIMEOUT_MS });
  } catch (e) {
    if (e instanceof YtDlpError) {
      if (e.kind === 'PRIVATE_OR_PROTECTED') throw new ExtractionInputError(e.message, 'PRIVATE_OR_PROTECTED_CONTENT');
      if (e.kind === 'NOT_FOUND') throw new ExtractionInputError(e.message, 'NOT_FOUND');
      if (e.kind === 'TIMEOUT') throw new ExtractionInputError(e.message, 'TIMEOUT');
      throw new ExtractionInputError(e.message, 'EXTRACTION_FAILED');
    }
    throw e;
  }

  if (info.duration && info.duration > config.MAX_SOURCE_DURATION_SECONDS) {
    throw new ExtractionInputError('Source media exceeds the maximum supported duration', 'EXTRACTION_FAILED');
  }

  const normalized = normalizeYtDlpResult(info, match, rawUrl);
  if (normalized.result.assets.length === 0) {
    throw new ExtractionInputError('No downloadable media found at this URL', 'NOT_FOUND');
  }
  return normalized;
}
