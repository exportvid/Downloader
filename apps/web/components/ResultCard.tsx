import type { ExtractionResult } from '@exportvid/shared';
import { PLATFORM_LABELS } from '@exportvid/shared';
import { contentTypeLabel, formatBytes, formatDuration } from '@/lib/format';
import { DownloadButton } from './DownloadButton';

export function ResultCard({ result }: { result: ExtractionResult }) {
  const duration = formatDuration(result.duration);

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-col gap-4 border-b border-line p-5 sm:flex-row">
        {result.thumbnail && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={result.thumbnail}
            alt={result.title ?? 'Media thumbnail'}
            className="h-40 w-full rounded-lg object-cover sm:h-24 sm:w-24"
            loading="lazy"
          />
        )}
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-line-strong px-2.5 py-0.5 text-xs font-medium text-ink-dim">
              {PLATFORM_LABELS[result.platform]}
            </span>
            <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
              {contentTypeLabel(result.contentType)}
            </span>
            {duration && <span className="text-xs text-ink-faint">{duration}</span>}
          </div>
          {result.title && <p className="truncate text-sm font-medium text-ink" title={result.title}>{result.title}</p>}
          {result.author?.name && <p className="mt-0.5 text-xs text-ink-faint">by {result.author.name}</p>}
        </div>
      </div>

      <ul className="divide-y divide-line">
        {result.assets.map((asset) => (
          <li key={asset.id} className="flex items-center justify-between gap-4 p-4 sm:px-5">
            <div className="min-w-0">
              <p className="text-sm font-medium text-ink">{asset.label}</p>
              <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-ink-faint">
                {asset.width && asset.height && <span>{asset.width} × {asset.height}</span>}
                <span>{asset.audioOnly ? 'Audio only' : asset.hasAudio ? 'Video + Audio' : 'Video only'}</span>
                {formatBytes(asset.filesize) && <span>{formatBytes(asset.filesize)}</span>}
              </p>
            </div>
            <DownloadButton requestId={result.requestId} assetId={asset.id} label="Download" />
          </li>
        ))}
      </ul>
    </div>
  );
}
