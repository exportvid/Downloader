'use client';

import { useRef, useState } from 'react';
import type { ExtractionResult } from '@exportvid/shared';
import { detectPlatform } from '@exportvid/shared';
import { extractMedia, ExtractionApiError } from './api';

export const DOWNLOADER_ERROR_MESSAGES: Record<string, string> = {
  UNSUPPORTED_URL: "That link isn't from a supported platform.",
  INVALID_URL: "That doesn't look like a valid link.",
  PRIVATE_OR_PROTECTED_CONTENT: 'This content is private or requires login.',
  NOT_FOUND: 'No downloadable media found at that link.',
  EXTRACTION_FAILED: 'The source didn’t return usable media. It may be removed or temporarily blocked.',
  RATE_LIMITED: "You're going a bit too fast. Try again in a moment.",
  TIMEOUT: 'The source took too long to respond. Please try again.',
  INTERNAL_ERROR: 'Something went wrong. Please try again.',
};

export type DownloaderStatus = 'idle' | 'loading' | 'error' | 'success';

/**
 * Shared extraction state machine used by every homepage concept. Keeping the
 * fetch/paste/abort logic in one place means each concept only has to build
 * its own presentation around { status, result, error, detected }.
 */
export function useDownloader(initialUrl = '') {
  const [url, setUrl] = useState(initialUrl);
  const [status, setStatus] = useState<DownloaderStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ExtractionResult | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const detected = url.trim() ? detectPlatform(url.trim()) : null;

  async function runExtraction(targetUrl: string) {
    const trimmed = targetUrl.trim();
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
      setError(DOWNLOADER_ERROR_MESSAGES[code] ?? DOWNLOADER_ERROR_MESSAGES.INTERNAL_ERROR);
      setStatus('error');
    }
  }

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    void runExtraction(url);
  }

  async function handlePaste() {
    try {
      const text = (await navigator.clipboard.readText()).trim();
      setUrl(text);
      inputRef.current?.focus();
    } catch {
      inputRef.current?.focus();
    }
  }

  function reset() {
    abortRef.current?.abort();
    setUrl('');
    setStatus('idle');
    setError(null);
    setResult(null);
  }

  return { url, setUrl, status, error, result, detected, inputRef, handleSubmit, handlePaste, reset, runExtraction };
}
