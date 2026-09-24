'use client';

import { useRef, useState } from 'react';
import type { ExtractionResult } from '@exportvid/shared';
import { detectPlatform } from '@exportvid/shared';
import { extractMedia, ExtractionApiError } from './api';
import { useI18n } from '@/components/I18nProvider';
import { useTurnstile } from './useTurnstile';

export type DownloaderStatus = 'idle' | 'loading' | 'error' | 'success';

/**
 * Shared extraction state machine used by every homepage concept. Keeping the
 * fetch/paste/abort logic in one place means each concept only has to build
 * its own presentation around { status, result, error, detected }.
 */
export function useDownloader(initialUrl = '') {
  const { t } = useI18n();
  const [url, setUrl] = useState(initialUrl);
  const [status, setStatus] = useState<DownloaderStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ExtractionResult | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const turnstile = useTurnstile();

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

    let turnstileToken: string | undefined;
    try {
      turnstileToken = await turnstile.getToken();
    } catch {
      if (controller.signal.aborted) return;
      setError(t.errors.VERIFICATION_FAILED);
      setStatus('error');
      return;
    }
    if (controller.signal.aborted) return;

    try {
      const data = await extractMedia(trimmed, turnstileToken, controller.signal);
      setResult(data);
      setStatus('success');
    } catch (err) {
      if (controller.signal.aborted) return;
      const code = err instanceof ExtractionApiError ? err.code : 'INTERNAL_ERROR';
      const messages = t.errors as Record<string, string>;
      setError(messages[code] ?? t.errors.INTERNAL_ERROR);
      setStatus('error');
    }
  }

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    // An empty submit points the visitor at the field instead of doing nothing.
    if (!url.trim()) {
      inputRef.current?.focus();
      return;
    }
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

  return {
    url,
    setUrl,
    status,
    error,
    result,
    detected,
    inputRef,
    /** Attach to an empty div near the form. Cloudflare draws a checkbox there only when it needs a click. */
    turnstileRef: turnstile.containerRef,
    /** True while that checkbox is on screen, so the layout can make room for it. */
    turnstileVisible: turnstile.challengeVisible,
    handleSubmit,
    handlePaste,
    reset,
    runExtraction,
  };
}
