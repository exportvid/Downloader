# One image runs both the API and the merge worker; the compose file picks the command.
# Build from the repository root:  docker build -f infra/api.Dockerfile .

FROM node:20-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
COPY packages/shared/package.json packages/shared/
COPY apps/api/package.json apps/api/
COPY apps/web/package.json apps/web/
RUN npm ci --workspace=apps/api --workspace=packages/shared --include-workspace-root
COPY packages/shared packages/shared
COPY apps/api apps/api
RUN npm run build:shared \
 && npm run prisma:generate --workspace=apps/api \
 && npm run build --workspace=apps/api

FROM node:20-bookworm-slim
ENV NODE_ENV=production
RUN apt-get update \
 && apt-get install -y --no-install-recommends ffmpeg python3 python3-venv ca-certificates openssl tini \
 && rm -rf /var/lib/apt/lists/*

# yt-dlp changes often because platforms change. Bump YTDLP_REFRESH (infra/update.sh does) to force a fresh install.
# curl_cffi lets yt-dlp impersonate a browser, which the YOUTUBE and VIMEO extractors need.
ARG YTDLP_REFRESH=0
RUN python3 -m venv /opt/venv \
 && /opt/venv/bin/pip install --no-cache-dir -U "yt-dlp[default]" curl_cffi \
 && echo "yt-dlp refresh ${YTDLP_REFRESH}" > /opt/venv/.refresh
ENV PATH="/opt/venv/bin:${PATH}"

COPY --from=build /app /app
WORKDIR /app/apps/api
# ffmpeg output goes here before it is uploaded to R2. The sweeper deletes anything left behind.
RUN mkdir -p .tmp-media && chown -R node:node .tmp-media
USER node
EXPOSE 4000
ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["node", "dist/index.js"]
