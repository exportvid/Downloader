'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { TURNSTILE_SITE_KEY } from './config';

interface TurnstileApi {
  render: (container: HTMLElement, options: Record<string, unknown>) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT_URL = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
/** Long enough for a visitor to finish an interactive challenge if Cloudflare shows one. */
const TOKEN_WAIT_MS = 45_000;

let scriptPromise: Promise<TurnstileApi> | null = null;

function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  scriptPromise ??= new Promise<TurnstileApi>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = SCRIPT_URL;
    script.async = true;
    script.onload = () => (window.turnstile ? resolve(window.turnstile) : reject(new Error('turnstile missing')));
    script.onerror = () => {
      scriptPromise = null;
      reject(new Error('turnstile script failed to load'));
    };
    document.head.appendChild(script);
  });
  return scriptPromise;
}

interface Waiter {
  resolve: (token: string) => void;
  reject: (err: Error) => void;
}

/**
 * Runs an invisible Cloudflare Turnstile check in the background, so a token is usually ready before the visitor
 * submits. Cloudflare only shows the widget when it wants the visitor to click. Each token works once, so taking
 * one starts the next check right away.
 *
 * Without NEXT_PUBLIC_TURNSTILE_SITE_KEY the hook does nothing and getToken resolves to undefined.
 */
export function useTurnstile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const token = useRef<string | null>(null);
  const failure = useRef<Error | null>(null);
  const waiters = useRef<Waiter[]>([]);
  const [challengeVisible, setChallengeVisible] = useState(false);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;
    let cancelled = false;

    const fail = (err: Error) => {
      failure.current = err;
      waiters.current.splice(0).forEach((w) => w.reject(err));
    };

    loadTurnstile()
      .then((turnstile) => {
        if (cancelled || !containerRef.current) return;
        widgetId.current = turnstile.render(containerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          action: 'extract',
          appearance: 'interaction-only',
          theme: document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
          'refresh-expired': 'auto',
          callback: (value: string) => {
            failure.current = null;
            const waiter = waiters.current.shift();
            if (waiter) {
              waiter.resolve(value);
              if (widgetId.current) turnstile.reset(widgetId.current);
            } else {
              token.current = value;
            }
          },
          'before-interactive-callback': () => setChallengeVisible(true),
          'after-interactive-callback': () => setChallengeVisible(false),
          'expired-callback': () => {
            token.current = null;
          },
          'error-callback': (code: string) => {
            fail(new Error(`turnstile error ${code}`));
          },
        });
      })
      .catch((err: Error) => fail(err));

    return () => {
      cancelled = true;
      if (widgetId.current) window.turnstile?.remove(widgetId.current);
      widgetId.current = null;
      token.current = null;
    };
  }, []);

  const getToken = useCallback((): Promise<string | undefined> => {
    if (!TURNSTILE_SITE_KEY) return Promise.resolve(undefined);

    if (token.current) {
      const value = token.current;
      token.current = null;
      if (widgetId.current) window.turnstile?.reset(widgetId.current);
      return Promise.resolve(value);
    }

    // The widget already failed and has no token coming. Retry once from scratch before giving up.
    if (failure.current && widgetId.current) {
      failure.current = null;
      window.turnstile?.reset(widgetId.current);
    } else if (failure.current) {
      return Promise.reject(failure.current);
    }

    return new Promise<string>((resolve, reject) => {
      const waiter: Waiter = {
        resolve: (value) => {
          clearTimeout(timer);
          resolve(value);
        },
        reject: (err) => {
          clearTimeout(timer);
          reject(err);
        },
      };
      const timer = setTimeout(() => {
        waiters.current = waiters.current.filter((w) => w !== waiter);
        reject(new Error('turnstile timed out'));
      }, TOKEN_WAIT_MS);
      waiters.current.push(waiter);
    });
  }, []);

  return { containerRef, getToken, challengeVisible };
}
