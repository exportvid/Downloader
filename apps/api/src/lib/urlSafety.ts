import dns from 'node:dns/promises';
import { request as undiciRequest, type Dispatcher } from 'undici';

export class UnsafeUrlError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnsafeUrlError';
  }
}

/** IPv4 ranges that must never be reached: loopback, private, link-local (incl. cloud metadata), CGNAT, reserved. */
function isPrivateOrReservedIPv4(ip: string): boolean {
  const parts = ip.split('.').map(Number);
  if (parts.length !== 4 || parts.some((n) => Number.isNaN(n) || n < 0 || n > 255)) return true;
  const [a, b] = parts;

  if (a === 0) return true; // 0.0.0.0/8
  if (a === 10) return true; // 10.0.0.0/8
  if (a === 127) return true; // 127.0.0.0/8 loopback
  if (a === 169 && b === 254) return true; // 169.254.0.0/16 link-local + cloud metadata
  if (a === 172 && b >= 16 && b <= 31) return true; // 172.16.0.0/12
  if (a === 192 && b === 168) return true; // 192.168.0.0/16
  if (a === 100 && b >= 64 && b <= 127) return true; // 100.64.0.0/10 CGNAT
  if (a === 192 && b === 0) return true; // 192.0.0.0/24 IETF protocol assignments
  if (a >= 224) return true; // multicast (224/4) + reserved (240/4) + broadcast
  return false;
}

/** IPv6 ranges that must never be reached: loopback, unique-local, link-local, mapped IPv4. */
function isPrivateOrReservedIPv6(ip: string): boolean {
  const normalized = ip.toLowerCase();
  if (normalized === '::1' || normalized === '::') return true;
  if (normalized.startsWith('fc') || normalized.startsWith('fd')) return true; // fc00::/7 unique local
  if (normalized.startsWith('fe8') || normalized.startsWith('fe9') || normalized.startsWith('fea') || normalized.startsWith('feb')) {
    return true; // fe80::/10 link-local
  }
  if (normalized.startsWith('::ffff:')) {
    return isPrivateOrReservedIPv4(normalized.replace('::ffff:', ''));
  }
  return false;
}

export function isPrivateOrReservedIp(ip: string): boolean {
  return ip.includes(':') ? isPrivateOrReservedIPv6(ip) : isPrivateOrReservedIPv4(ip);
}

/**
 * Resolves a hostname and throws if it is missing or if ANY resolved address
 * is private/loopback/link-local/reserved. Defends against DNS rebinding —
 * every redirect hop and the initial host must both pass this check.
 */
export async function assertPublicHostname(hostname: string): Promise<void> {
  let records: { address: string }[];
  try {
    records = await dns.lookup(hostname, { all: true, verbatim: true });
  } catch {
    throw new UnsafeUrlError(`Could not resolve host: ${hostname}`);
  }
  if (records.length === 0) {
    throw new UnsafeUrlError(`Could not resolve host: ${hostname}`);
  }
  for (const { address } of records) {
    if (isPrivateOrReservedIp(address)) {
      throw new UnsafeUrlError(`Refusing to contact private/internal address for host: ${hostname}`);
    }
  }
}

export interface ParsedSafeUrl {
  url: URL;
}

/** Parses + validates scheme and hostname resolution for a user- or source-provided URL. */
export async function assertSafeUrl(rawUrl: string): Promise<ParsedSafeUrl> {
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    throw new UnsafeUrlError('Malformed URL');
  }
  if (url.protocol !== 'https:' && url.protocol !== 'http:') {
    throw new UnsafeUrlError('Only http/https URLs are allowed');
  }
  if (url.username || url.password) {
    throw new UnsafeUrlError('URLs with embedded credentials are not allowed');
  }
  await assertPublicHostname(url.hostname);
  return { url };
}

const MAX_REDIRECTS = 5;

/**
 * A redirect-limited, SSRF-safe fetch used only for proxying already-resolved
 * media CDN URLs (never for arbitrary user input). Each hop's hostname is
 * re-validated before being followed.
 */
export async function safeStreamFetch(
  rawUrl: string,
  opts: { headers?: Record<string, string>; signal?: AbortSignal } = {},
): Promise<Dispatcher.ResponseData> {
  let current = rawUrl;
  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    const { url } = await assertSafeUrl(current);
    const res = await undiciRequest(url, {
      method: 'GET',
      headers: opts.headers,
      signal: opts.signal,
      maxRedirections: 0,
    });

    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      const location = Array.isArray(res.headers.location) ? res.headers.location[0] : res.headers.location;
      current = new URL(location, url).toString();
      res.body.destroy();
      continue;
    }
    return res;
  }
  throw new UnsafeUrlError('Too many redirects');
}
