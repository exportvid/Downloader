'use client';

import { useCallback, useRef, useState } from 'react';
import { prepareDownload, pollJob } from '@/lib/api';

type Status = 'idle' | 'preparing' | 'processing' | 'error';

const POLL_INTERVAL_MS = 1500;
const MAX_POLLS = 80; // ~2 minutes

export function DownloadButton({ requestId, assetId, label }: { requestId: string; assetId: string; label: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);
  const cancelled = useRef(false);

  const startDownload = useCallback(async () => {
    setStatus('preparing');
    setError(null);
    cancelled.current = false;
    try {
      const prepared = await prepareDownload(requestId, assetId);
      if (prepared.kind === 'direct') {
        window.location.href = prepared.url;
        setStatus('idle');
        return;
      }

      setStatus('processing');
      for (let i = 0; i < MAX_POLLS; i++) {
        if (cancelled.current) return;
        await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS));
        const job = await pollJob(prepared.jobId);
        if (job.status === 'completed' && job.downloadUrl) {
          window.location.href = job.downloadUrl;
          setStatus('idle');
          return;
        }
        if (job.status === 'failed') {
          setError('Could not prepare this file. Please try a different quality.');
          setStatus('error');
          return;
        }
      }
      setError('This is taking longer than expected. Please try again.');
      setStatus('error');
    } catch {
      setError('Something went wrong. Please try again.');
      setStatus('error');
    }
  }, [requestId, assetId]);

  const isBusy = status === 'preparing' || status === 'processing';

  return (
    <div className="flex flex-col items-end gap-1">
      <button
        type="button"
        onClick={startDownload}
        disabled={isBusy}
        className="press inline-flex min-w-[112px] items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-contrast transition-[filter,opacity] duration-200 ease-out hover:brightness-110 disabled:cursor-wait disabled:opacity-70"
      >
        {status === 'preparing' && <Spinner />}
        {status === 'processing' && <Spinner />}
        {isBusy ? (status === 'processing' ? 'Merging…' : 'Preparing…') : label}
      </button>
      {status === 'error' && error && <p className="reveal max-w-[220px] text-right text-xs text-rose-400">{error}</p>}
    </div>
  );
}

function Spinner() {
  return (
    <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  );
}
