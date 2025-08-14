#!/bin/bash
set -e

APP_NAME="selekhome"
IMAGE="${IMAGE_NAME}:latest"

echo "[1/4] Pull image: $IMAGE"
docker pull "$IMAGE"

echo "[2/4] Stop & remove old container (if exists)"
docker rm -f "$APP_NAME" 2>/dev/null || true

echo "[3/4] Run new container"
docker run -d --name "$APP_NAME" --restart unless-stopped \
  -p 127.0.0.1:8080:80 \
  "$IMAGE"

echo "[4/4] Cleanup dangling images"
docker image prune -f

echo "✅ Deployment completed!"
