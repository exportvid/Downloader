#!/usr/bin/env bash
# Pulls the latest code and rebuilds with a fresh yt-dlp. Run it by hand after a deploy, or weekly from cron,
# because platforms change and yt-dlp releases fixes often.
set -euo pipefail
cd "$(dirname "$0")"

git -C .. pull --ff-only
YTDLP_REFRESH="$(date +%s)" docker compose --env-file .env.production -f docker-compose.prod.yml build --pull
docker compose --env-file .env.production -f docker-compose.prod.yml up -d
docker image prune -f
