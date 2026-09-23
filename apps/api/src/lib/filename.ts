export function safeFilename(title: string | undefined, platform: string, ext: string): string {
  const base = (title ?? `${platform}-media`)
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 80);
  return `${base || platform}.${ext}`;
}
