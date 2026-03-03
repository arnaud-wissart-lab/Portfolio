#!/usr/bin/env bash
set -Eeuo pipefail

DEPLOY_PATH="${DEPLOY_PATH:-/opt/portfolio-hub}"
COMPOSE_FILE="${COMPOSE_FILE:-docker-compose.yml}"
HEALTHCHECK_URL="${HEALTHCHECK_URL:-http://127.0.0.1:8080/healthz}"
IMAGE_TAG="${IMAGE_TAG:-latest}"

if ! command -v docker >/dev/null 2>&1; then
  echo "docker is required on the remote machine." >&2
  exit 1
fi

if docker compose version >/dev/null 2>&1; then
  COMPOSE_CMD=(docker compose)
elif command -v docker-compose >/dev/null 2>&1; then
  COMPOSE_CMD=(docker-compose)
else
  echo "docker compose (or docker-compose) is required on the remote machine." >&2
  exit 1
fi

mkdir -p "$DEPLOY_PATH"

cd "$DEPLOY_PATH"

if [ ! -f "$COMPOSE_FILE" ]; then
  echo "Compose file not found: $DEPLOY_PATH/$COMPOSE_FILE" >&2
  exit 1
fi

export IMAGE_TAG

"${COMPOSE_CMD[@]}" -f "$COMPOSE_FILE" pull
"${COMPOSE_CMD[@]}" -f "$COMPOSE_FILE" up -d

if command -v curl >/dev/null 2>&1; then
  for attempt in {1..20}; do
    if curl -fsS "$HEALTHCHECK_URL" >/dev/null; then
      echo "Deployment successful (healthcheck OK)."
      exit 0
    fi
    sleep 2
  done

  echo "Deployment finished but healthcheck failed: $HEALTHCHECK_URL" >&2
  exit 1
fi

echo "curl not found; deployment executed without healthcheck verification."
