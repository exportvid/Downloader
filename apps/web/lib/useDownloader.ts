'use client';

import { useRef, useState } from 'react';
import type { ExtractionResult } from '@exportvid/shared';
import { detectPlatform } from '@exportvid/shared';
import { extractMedia, ExtractionApiError } from './api';

export const DOWNLOADER_ERROR_MESSAGES: Record<string, string> = {
  UNSUPPORTED_URL: "ExportVid doesn't support that site yet. Check the supported sites list.",
  INVALID_URL: "That doesn't look like a link. Copy the full address of the post and paste it again.",
  PRIVATE_OR_PROTECTED_CONTENT: "This post is private or needs a login, so ExportVid can't reach it.",
  NOT_FOUND: "We couldn't find a video or photo at that link. Check that the post still exists.",
  EXTRACTION_FAILED: 'The platform didn’t return a file. The post may be removed, or the platform may be blocking the request. Try again in a minute.',
  RATE_LIMITED: 'Too many requests. Wait a moment and try again.',
  TIMEOUT: 'The platform took too long to respond. Try again.',
  INTERNAL_ERROR: 'Something went wrong on our end. Try again.',
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
