import 'dotenv/config';
import { z } from 'zod';

const schema = z.object({
  PORT: z.coerce.number().default(4000),
  HOST: z.string().default('0.0.0.0'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  WEB_ORIGIN: z.string().default('http://localhost:3000'),

  DATABASE_URL: z.string().optional(),
  REDIS_URL: z.string().default('redis://localhost:6379'),

  YTDLP_PATH: z.string().default('yt-dlp'),
  // Browser TLS impersonation target (needs curl_cffi installed alongside yt-dlp). Empty disables it.
  YTDLP_IMPERSONATE: z.string().default('chrome'),
  // Optional outbound proxy (e.g. a residential egress) for platforms that block datacenter IPs.
  YTDLP_PROXY: z.string().optional(),
  FFMPEG_PATH: z.string().default('ffmpeg'),

  R2_ACCOUNT_ID: z.string().optional(),
  R2_ACCESS_KEY_ID: z.string().optional(),
  R2_SECRET_ACCESS_KEY: z.string().optional(),
  R2_BUCKET: z.string().default('exportvid-tmp'),
  R2_ENDPOINT: z.string().optional(),
  R2_PUBLIC_BASE_URL: z.string().optional(),

  TEMP_FILE_TTL_SECONDS: z.coerce.number().default(900),
  EXTRACTION_CACHE_TTL_SECONDS: z.coerce.number().default(300),

  MAX_SOURCE_DURATION_SECONDS: z.coerce.number().default(7200),
  MAX_DOWNLOAD_BYTES: z.coerce.number().default(2 * 1024 * 1024 * 1024),
  EXTRACTION_TIMEOUT_MS: z.coerce.number().default(25000),

  // Cloudflare Turnstile secret. When set, every extraction needs a valid token from the website's widget.
  TURNSTILE_SECRET_KEY: z.string().optional(),
});

const parsed = schema.safeParse(process.env);
if (!parsed.success) {
  console.error('Invalid environment configuration:', parsed.error.flatten().fieldErrors);
  process.exit(1);
}

export const config = parsed.data;

export const r2Configured = Boolean(
  config.R2_ACCOUNT_ID && config.R2_ACCESS_KEY_ID && config.R2_SECRET_ACCESS_KEY,
);
