import { config } from '../config';

const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const VERIFY_TIMEOUT_MS = 5000;

/** Must match the `action` the website passes to the widget. */
export const TURNSTILE_ACTION = 'extract';

export const turnstileEnabled = Boolean(config.TURNSTILE_SECRET_KEY);

const expectedHostname = new URL(config.WEB_ORIGIN).hostname;

interface SiteverifyResponse {
  success: boolean;
  'error-codes'?: string[];
  action?: string;
  hostname?: string;
  metadata?: { result_with_testing_key?: boolean };
}

export type TurnstileOutcome = { ok: true } | { ok: false; reason: string };

/**
 * Checks a widget token with Cloudflare. Tokens are single use and expire after 5 minutes, so the website fetches a
 * new one for every extraction. Fails closed: if Cloudflare can't be reached, the request is refused.
 */
export async function verifyTurnstile(token: string | undefined, remoteIp: string): Promise<TurnstileOutcome> {
  if (!turnstileEnabled) return { ok: true };
  if (!token) return { ok: false, reason: 'missing-token' };

  let data: SiteverifyResponse;
  try {
    const res = await fetch(SITEVERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: config.TURNSTILE_SECRET_KEY, response: token, remoteip: remoteIp }),
      signal: AbortSignal.timeout(VERIFY_TIMEOUT_MS),
    });
    data = (await res.json()) as SiteverifyResponse;
  } catch (err) {
    return { ok: false, reason: `siteverify-unreachable: ${err instanceof Error ? err.message : 'unknown'}` };
  }

  if (!data.success) return { ok: false, reason: (data['error-codes'] ?? []).join(',') || 'rejected' };

  // Cloudflare's test keys return no action and report example.com. Accept them in development only, so a test
  // secret left in a production config fails loudly instead of letting every request through.
  if (data.metadata?.result_with_testing_key) {
    return config.NODE_ENV === 'production' ? { ok: false, reason: 'testing-key-in-production' } : { ok: true };
  }
  if (data.action !== TURNSTILE_ACTION) return { ok: false, reason: `wrong-action:${data.action}` };
  if (config.NODE_ENV === 'production' && data.hostname !== expectedHostname) {
    return { ok: false, reason: `wrong-hostname:${data.hostname}` };
  }
  return { ok: true };
}
