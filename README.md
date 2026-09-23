# ExportVid

A fast, minimal downloader for public social media content across 12 platforms: TikTok, Instagram, Facebook, X, Reddit, YouTube, Pinterest, Snapchat, Twitch, LinkedIn, Tumblr, and Vimeo. Paste a link, get the real available formats, download instantly. No accounts, no logins, no app.

## Architecture

```
apps/web      Next.js (App Router, TypeScript, Tailwind) — UI + SEO pages only
apps/api      Node.js (Fastify) — extraction, download proxy, ffmpeg merge worker
packages/shared  Types + platform detection shared by both apps
```

The frontend never talks to yt-dlp or ffmpeg directly — it only calls the API's normalized JSON contract (`ExtractionResult` / `MediaAsset` in [packages/shared/src/types.ts](packages/shared/src/types.ts)). All extraction, SSRF protection, and media processing live in `apps/api`, matching the spec's requirement to keep the frontend ignorant of platform-specific logic and to keep heavy ffmpeg work off Vercel/edge.

**Request flow:**
1. `POST /api/v1/extract` — validates the URL, resolves DNS and blocks private/metadata IP ranges (SSRF defense), shells out to `yt-dlp -J` (metadata only, no download), normalizes the result, caches it in Redis for a short TTL (also de-duplicates concurrent identical requests).
2. `GET /api/v1/download/prepare` — for assets the source serves as one muxed file, returns a ready-to-stream URL instantly. For assets split into separate video/audio streams (common on Reddit, sometimes elsewhere), it enqueues a BullMQ job and returns a `jobId`.
3. `GET /api/v1/download` — streams the file straight through from the source to the browser (SSRF-checked, size-capped, no buffering).
4. The merge worker (`apps/api/src/worker.ts`) runs `ffmpeg -c copy` (stream copy, no re-encode) to mux video+audio, uploads the result to R2 (or a local tmp dir in dev) with a short TTL, and the client polls `GET /api/v1/jobs/:jobId` until it's ready.

This keeps every byte of actual media flowing directly between the source, the API, and the browser — the browser never JS-buffers a whole video file, and Next.js never touches media bytes at all.

## Local setup

Prerequisites: Node 20+, [yt-dlp](https://github.com/yt-dlp/yt-dlp) and [ffmpeg](https://ffmpeg.org/) on `PATH`, Docker (for Postgres/Redis) — or point `REDIS_URL`/`DATABASE_URL` at your own instances.

```bash
npm install
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env
docker compose up -d          # Postgres + Redis (Valkey)
npm run build:shared
npx prisma generate --schema apps/api/prisma/schema.prisma
npx prisma migrate dev --schema apps/api/prisma/schema.prisma   # optional: only needed for the monitoring tables
npm run dev:api                # apps/api — Fastify on :4000
npm run dev:web                # apps/web — Next.js on :3000, in a second terminal
npx tsx apps/api/src/worker.ts # merge worker, in a third terminal (only needed for split video/audio sources)
```

## What's real vs. stubbed

- **Extraction, normalization, SSRF protection, error handling, caching, the download/merge/streaming pipeline, and every UI page are fully implemented**, not scaffolding. The normalization logic was verified against a live extraction (a real X/Twitter video) and matches the spec's example output (1080p/720p MP4, correct file sizes, video+audio flags).
- **R2 and Postgres are config-driven but not provisioned** — this environment has no Cloudflare or database credentials to create them with. Without `R2_*` env vars set, the merge worker falls back to serving temp files from local disk (dev-only). Without `DATABASE_URL`, monitoring events are silently skipped rather than failing requests.
- **Redis is a hard dependency**, same as it would be in production (rate limiting, extraction cache, and the merge queue all need it). This sandbox has no Redis available, so the full request path couldn't be exercised end-to-end here — only verified via `docker compose`'s absence producing the expected graceful 500, and via direct testing of the extraction/normalization code against live platform data.

## Known real-world limitations (found during testing, not assumptions)

- **TikTok and Instagram actively block requests from cloud/datacenter IPs.** Testing from this environment, both returned bot-detection errors even for known-good public URLs, while the same yt-dlp version reached X and Reddit's page layer fine. This is an industry-wide problem for this category of tool, not a bug in this codebase — expect to need a residential/rotating proxy pool for reliable TikTok and Instagram extraction in production, and budget for yt-dlp needing frequent updates as these platforms change their pages.
- **Reddit's extractor now requires authenticated cookies for most posts** (a recent Reddit API lockdown affecting yt-dlp broadly, not specific to this deployment). A no-login downloader will hit `PRIVATE_OR_PROTECTED_CONTENT` for a meaningful share of Reddit links until/unless a cookie-based workaround is added — which would need its own privacy/ToS review before adding.
- X/Twitter extraction was verified working end-to-end against a live post, including correct muxed-format detection (see the note in `apps/api/src/extraction/normalize.ts` about `vcodec`/`acodec` being `null` vs the literal string `"none"` on Twitter's progressive formats — a real bug caught and fixed during this build).
- **YouTube works** with browser impersonation (`curl_cffi`) plus the `android_vr` player client, which returns the full 144p to 2160p ladder as split video/audio streams. The merge worker stream-copies them into one file. yt-dlp needs to be kept current, and YouTube is the platform with the most legal risk for download tools (see the 2020 RIAA/youtube-dl DMCA case), so get a legal read before promoting it.
- **Verified live from a datacenter IP**: X, YouTube, Pinterest (video pins), Twitch clips, LinkedIn, Snapchat Spotlight.
- **Blocked by IP reputation from a datacenter IP (403 even with impersonation)**: TikTok, Instagram, Tumblr, Vimeo. Set `YTDLP_PROXY` to a residential egress in production. Reddit and some Vimeo videos also require login, which this product never uses, so those return `PRIVATE_OR_PROTECTED_CONTENT`.
- **Threads was removed.** yt-dlp has no extractor for it, and logged-out Threads pages don't contain the post media at all (`og:image` is the author's avatar), so supporting it would require a logged-in session.
- Pinterest image-only pins and Snapchat Stories aren't supported (yt-dlp errors or has no extractor); only video pins and Spotlight are claimed on the site.
- The ffmpeg merge path (YouTube 480p and above, HLS-only sources) was not run here because ffmpeg isn't installed in this environment. The normalizer output was verified against live data; the merge worker itself needs a test on a machine with ffmpeg and Redis.

## Deployment notes

- `apps/web` deploys to Vercel/Cloudflare Pages as a static-friendly Next.js app; it only needs `NEXT_PUBLIC_API_BASE_URL` and `NEXT_PUBLIC_SITE_URL`.
- `apps/api` and the worker need a normal Node host (not Vercel functions) since they shell out to `yt-dlp`/`ffmpeg` and run long-lived processes — a container on Fly.io/Railway/a VM behind Cloudflare is the right shape.
- Set `R2_ACCOUNT_ID` / `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` / `R2_BUCKET` (and optionally `R2_PUBLIC_BASE_URL` for a public bucket instead of presigned URLs) before going live — without them the worker's local-disk fallback is not safe for a multi-instance production deployment.

## Explicitly out of scope (per product spec)

No accounts, profiles, download history, favorites, comments, social features, mobile app, browser extension, editor, AI tools, cloud storage, or bulk downloading.

Every platform has its own landing page (`/[slug]`, driven by `apps/web/lib/platforms.ts`) that reuses the homepage download hero.

## Temporary file cleanup

Merged files are deleted about 15 minutes after they are ready (`TEMP_FILE_TTL_SECONDS`). The worker runs a sweeper on start and every 5 minutes that removes anything older, both in R2 and in the local tmp folder, so a crash or restart cannot leave files behind. As a second backstop, run this once after creating the R2 bucket. It makes R2 expire objects after one day:

```bash
npm run r2:lifecycle --workspace=apps/api
```

## Deploy check

`.github/workflows/ci.yml` runs on every push and pull request: install, build the shared package, generate the Prisma client, type check, lint the web app, build web and API, and audit production dependencies (report only). The API has no ESLint config yet, so it is type-checked but not linted.
