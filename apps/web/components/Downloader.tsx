'use client';

import { useRef, useState } from 'react';
import type { ExtractionResult } from '@exportvid/shared';
import { detectPlatform, PLATFORM_LABELS } from '@exportvid/shared';
import { extractMedia, ExtractionApiError } from '@/lib/api';
import { ResultCard } from './ResultCard';

const ERROR_MESSAGES: Record<string, string> = {
  UNSUPPORTED_URL: "That link isn't from a supported platform yet (TikTok, Instagram, Facebook, X, or Reddit).",
  INVALID_URL: "That doesn't look like a valid link. Double-check it and try again.",
  PRIVATE_OR_PROTECTED_CONTENT: 'This content is private or requires login, so it can’t be downloaded.',
  NOT_FOUND: "We couldn't find any downloadable media at that link.",
  EXTRACTION_FAILED: 'The source didn’t return usable media. It may have been removed, or the platform is temporarily blocking requests.',
  RATE_LIMITED: "You're sending requests a bit too fast. Please wait a moment and try again.",
  TIMEOUT: 'The source took too long to respond. Please try again.',
  INTERNAL_ERROR: 'Something went wrong on our end. Please try again in a moment.',
};

type Status = 'idle' | 'loading' | 'error' | 'success';

export function Downloader({ initialUrl }: { initialUrl?: string } = {}) {
  const [url, setUrl] = useState(initialUrl ?? '');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ExtractionResult | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const detected = url.trim() ? detectPlatform(url.trim()) : null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = url.trim();
    if (!trimmed) return;

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setStatus('loading');
    setError(null);
    setResult(null);

    try {
      const data = await extractMedia(trimmed, controller.signal);
      setResult(data);
      setStatus('success');
    } catch (err) {
      if (controller.signal.aborted) return;
      const code = err instanceof ExtractionApiError ? err.code : 'INTERNAL_ERROR';
      setError(ERROR_MESSAGES[code] ?? ERROR_MESSAGES.INTERNAL_ERROR);
      setStatus('error');
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <input
            type="url"
            inputMode="url"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste a video or social media URL"
            className="h-14 w-full rounded-xl border border-line-strong bg-base-raised px-5 text-[15px] text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-accent"
          />
          {detected && (
            <span className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 text-xs text-accent sm:block">
              {PLATFORM_LABELS[detected.platform]}
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={status === 'loading' || !url.trim()}
          className="h-14 shrink-0 rounded-xl bg-accent px-8 text-[15px] font-semibold text-accent-contrast shadow-glow transition-transform hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'loading' ? 'Analyzing…' : 'Download'}
        </button>
      </form>

      <div className="mt-6">
        {status === 'loading' && <LoadingCard />}
        {status === 'error' && error && (
          <p role="alert" className="rounded-lg border border-red-900/40 bg-red-950/30 px-4 py-3 text-sm text-red-300">
            {error}
          </p>
        )}
        {status === 'success' && result && <ResultCard result={result} />}
      </div>
    </div>
  );
}

function LoadingCard() {
  return (
    <div className="card flex items-center gap-4 p-5">
      <div className="h-16 w-16 animate-pulse rounded-lg bg-base-raised" />
      <div className="flex-1 space-y-2">
        <div className="h-3 w-1/3 animate-pulse rounded bg-base-raised" />
        <div className="h-3 w-2/3 animate-pulse rounded bg-base-raised" />
      </div>
    </div>
  );
}
