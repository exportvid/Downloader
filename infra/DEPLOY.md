# Deploying ExportVid

The website runs on Vercel. The backend (API, merge worker, Redis, Postgres, HTTPS) runs on one small server with Docker.

```
Browser ──> exportvid.com      Vercel   (Next.js website)
        └─> api.exportvid.com  Server   (Caddy ─> API ─> Redis, Postgres, worker)
                                          └─> Cloudflare R2 (temporary merged files)
```

## 1. Before you start

- **Domain** with DNS you can edit (Cloudflare DNS is fine).
- **Cloudflare R2 bucket** named `exportvid-tmp`, plus an API token with read and write access to it. Note the account ID.
- **Cloudflare Turnstile widget** (free). In the Cloudflare dashboard, open Turnstile, add a widget for `exportvid.com`, and choose **Invisible** mode. Note the site key and the secret key.
- **Residential proxy** account. TikTok, Instagram, Tumblr, and some Vimeo links block cloud servers, so those pages fail without one. You need the proxy URL in the form `http://user:pass@host:port`.
- **A server**: Ubuntu 24.04, 2 vCPU, 4 GB RAM (for example a Hetzner CX22). In the provider's firewall, allow only ports 22, 80, and 443.

## 2. Set up the server

```bash
curl -fsSL https://get.docker.com | sh
git clone https://github.com/exportvid/Downloader.git /opt/exportvid
cd /opt/exportvid/infra
cp .env.production.example .env.production
nano .env.production            # fill in every value
```

Point an **A record** for `api.exportvid.com` at the server's IP address. Set it to **DNS only** (grey cloud) if you use Cloudflare. Cloudflare's free CDN is not meant for serving large video downloads, and the API streams every direct download.

Then start everything and create the database tables:

```bash
docker compose --env-file .env.production -f docker-compose.prod.yml up -d --build
docker compose --env-file .env.production -f docker-compose.prod.yml run --rm api npx prisma db push
```

Set the R2 expiry backstop once (deletes anything left in the bucket after one day):

```bash
docker compose --env-file .env.production -f docker-compose.prod.yml run --rm api npm run r2:lifecycle
```

Check it works: `https://api.exportvid.com/health` should return `{"ok":true,...}`.

## 3. Deploy the website on Vercel

1. Import the GitHub repository.
2. Set **Root Directory** to `apps/web`. Leave "Include source files outside of the Root Directory" on. The install and build commands come from `apps/web/vercel.json`.
3. Add these environment variables:
   - `NEXT_PUBLIC_SITE_URL` = `https://exportvid.com`
   - `NEXT_PUBLIC_API_BASE_URL` = `https://api.exportvid.com`
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY` = the Turnstile site key
4. Add the domains `exportvid.com` and `www.exportvid.com`. The site already redirects `www` to the bare domain.

## 4. After launch

- **Test every platform** with a real link. If TikTok or Instagram fail, check `YTDLP_PROXY` first.
- **Test a merge:** download a YouTube video at 720p or higher and a Reddit video. These use the ffmpeg worker, which has never run outside a test build.
- **Uptime monitor:** point a free monitor (UptimeRobot, Better Stack) at `https://api.exportvid.com/health` and at the homepage.
- **Weekly yt-dlp update:** platforms change, and yt-dlp fixes them. Run `infra/update.sh` after each deploy, and add a weekly job:
  ```bash
  0 4 * * 1 /opt/exportvid/infra/update.sh >> /var/log/exportvid-update.log 2>&1
  ```
- **Google Search Console:** add the site and submit `https://exportvid.com/sitemap.xml`.
- **Logs:** `docker compose --env-file .env.production -f docker-compose.prod.yml logs -f api worker`. The server logs contain visitor IP addresses, so set a retention period (for example with Docker's `max-size` and `max-file` log options) and state it in the Privacy Policy.

## Things to know

- Only Caddy is reachable from outside. Redis and Postgres stay on the internal Docker network.
- The API trusts exactly one proxy hop (Caddy) so rate limits see each visitor's real IP. Do not publish the API's port 4000 directly. If you later put Cloudflare's proxy (orange cloud) in front of Caddy, add Cloudflare's IP ranges to Caddy's `trusted_proxies`, or every visitor will share Cloudflare's IPs.
- **Bot check:** every extraction needs a Turnstile token, checked with Cloudflare before yt-dlp runs. If you set only one of the two keys, extraction breaks: a site key without the secret does nothing, and a secret without the site key rejects every request. The API refuses Cloudflare's test keys in production.
- **Rate limits** (per visitor IP, set in `apps/api/src/lib/limits.ts`): 10 extractions a minute and 60 an hour, 4 downloads streaming at once, 6 merge jobs per 10 minutes, and no new merge jobs for anyone while 25 are waiting. `/health` is not limited.
- Postgres holds only service metrics (platform, success or failure, timing). If you lose it, nothing user-facing breaks, so there are no backups set up.
- If the server runs out of bandwidth or CPU, the next step is a second server behind a load balancer.
