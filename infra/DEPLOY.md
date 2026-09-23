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
- The API trusts the forwarding header from Caddy so rate limits see each visitor's real IP. Do not publish the API's port 4000 directly.
- Postgres holds only service metrics (platform, success or failure, timing). If you lose it, nothing user-facing breaks, so there are no backups set up.
- If the server runs out of bandwidth or CPU, the next step is a second server behind a load balancer.
