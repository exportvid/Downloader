import { execFile, type ExecFileException } from 'node:child_process';
import { config } from '../config';

export class YtDlpError extends Error {
  constructor(
    message: string,
    public readonly kind: 'PRIVATE_OR_PROTECTED' | 'NOT_FOUND' | 'TIMEOUT' | 'UNKNOWN',
  ) {
    super(message);
    this.name = 'YtDlpError';
  }
}

// yt-dlp's raw JSON (-J) shape, narrowed to the fields we actually consume.
export interface YtDlpFormat {
  format_id: string;
  ext: string;
  vcodec?: string;
  acodec?: string;
  width?: number;
  height?: number;
  fps?: number;
  tbr?: number; // total bitrate, kbps
  abr?: number; // audio bitrate, kbps
  protocol?: string;
  filesize?: number;
  filesize_approx?: number;
  url: string;
  format_note?: string;
  resolution?: string;
  http_headers?: Record<string, string>;
}

export interface YtDlpInfo {
  id: string;
  title?: string;
  description?: string;
  thumbnail?: string;
  duration?: number;
  webpage_url: string;
  uploader?: string;
  uploader_id?: string;
  uploader_url?: string;
  extractor_key?: string;
  formats?: YtDlpFormat[];
  ext?: string;
  url?: string; // present when there's a single direct format (no `formats` array)
  width?: number;
  height?: number;
  vcodec?: string;
  acodec?: string;
  filesize?: number;
  http_headers?: Record<string, string>;
  protocol?: string;
  // Photo/carousel posts (Instagram) surface additional entries here.
  entries?: YtDlpInfo[];
}

let impersonationAvailable: Promise<boolean> | null = null;

/** True when yt-dlp can impersonate a browser TLS fingerprint (curl_cffi installed). Checked once. */
function canImpersonate(): Promise<boolean> {
  if (!config.YTDLP_IMPERSONATE) return Promise.resolve(false);
  impersonationAvailable ??= new Promise((resolve) => {
    execFile(config.YTDLP_PATH, ['--list-impersonate-targets'], { timeout: 10_000 }, (err, stdout) => {
      resolve(!err && /curl_cffi/i.test(stdout));
    });
  });
  return impersonationAvailable;
}

async function buildArgs(url: string, extra: string[]): Promise<string[]> {
  const args = ['-J', '--no-warnings', '--no-playlist', '--skip-download', '--socket-timeout', '15'];
  if (await canImpersonate()) args.push('--impersonate', config.YTDLP_IMPERSONATE);
  if (config.YTDLP_PROXY) args.push('--proxy', config.YTDLP_PROXY);
  args.push(...extra, url);
  return args;
}

function runYtDlp(args: string[], timeoutMs: number): Promise<YtDlpInfo> {
  return new Promise((resolve, reject) => {
    const child = execFile(
      config.YTDLP_PATH,
      args,
      { timeout: timeoutMs, maxBuffer: 32 * 1024 * 1024 },
      (err, stdout, stderr) => {
        if (err) {
          const execErr = err as ExecFileException;
          if (execErr.killed || execErr.signal === 'SIGTERM') {
            return reject(new YtDlpError('Extraction timed out', 'TIMEOUT'));
          }
          const combined = `${stderr}\n${stdout}`.toLowerCase();
          if (
            combined.includes('private') ||
            combined.includes('login required') ||
            combined.includes('authentication is required') ||
            combined.includes('requires authentication') ||
            combined.includes('account authentication') ||
            combined.includes('rate-limit reached or login') ||
            combined.includes('only works when logged-in') ||
            combined.includes('this account is private') ||
            combined.includes('use --cookies')
          ) {
            return reject(new YtDlpError('Content is private or requires login', 'PRIVATE_OR_PROTECTED'));
          }
          if (combined.includes('404') || combined.includes('not found') || combined.includes('unavailable')) {
            return reject(new YtDlpError('Content not found or unavailable', 'NOT_FOUND'));
          }
          return reject(new YtDlpError(stderr || err.message, 'UNKNOWN'));
        }
        try {
          resolve(JSON.parse(stdout) as YtDlpInfo);
        } catch {
          reject(new YtDlpError('Could not parse extractor output', 'UNKNOWN'));
        }
      },
    );
    child.on('error', (e) => reject(new YtDlpError(e.message, 'UNKNOWN')));
  });
}

/**
 * Runs `yt-dlp -J <url>` to fetch metadata only, never downloading media.
 * Arguments are passed as an array (execFile, no shell) so the URL can never
 * inject shell syntax. YouTube tries the android_vr client first (it returns the
 * full resolution ladder without a PO token) and falls back to yt-dlp's defaults.
 */
export async function fetchInfo(url: string, opts: { timeoutMs: number; platform?: string }): Promise<YtDlpInfo> {
  if (opts.platform === 'youtube') {
    try {
      return await runYtDlp(await buildArgs(url, ['--extractor-args', 'youtube:player_client=android_vr']), opts.timeoutMs);
    } catch (e) {
      if (e instanceof YtDlpError && e.kind === 'TIMEOUT') throw e;
    }
  }
  return runYtDlp(await buildArgs(url, []), opts.timeoutMs);
}
