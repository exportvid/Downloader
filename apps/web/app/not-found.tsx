import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-tool flex flex-col items-center justify-center py-32 text-center">
      <h1 className="font-display text-3xl font-semibold text-ink">Page not found</h1>
      <p className="mt-3 text-ink-dim">The page you’re looking for doesn’t exist.</p>
      <Link href="/" className="mt-6 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast">
        Back to ExportVid
      </Link>
    </div>
  );
}
