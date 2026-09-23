import { Transform } from 'node:stream';

export class DownloadTooLargeError extends Error {
  constructor() {
    super('Download exceeds the maximum allowed size');
    this.name = 'DownloadTooLargeError';
  }
}

/** Aborts the stream once more than `maxBytes` have passed through — a hard cap independent of any (possibly missing or wrong) Content-Length header. */
export function createByteLimiter(maxBytes: number): Transform {
  let total = 0;
  return new Transform({
    transform(chunk, _enc, callback) {
      total += chunk.length;
      if (total > maxBytes) {
        callback(new DownloadTooLargeError());
        return;
      }
      callback(null, chunk);
    },
  });
}
