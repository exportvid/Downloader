export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://exportvid.com';
export const SITE_NAME = 'ExportVid';
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000';
/** Cloudflare Turnstile site key. Empty turns the bot check off, for local development. */
export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';
