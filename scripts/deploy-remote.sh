#!/usr/bin/env bash
set -Eeuo pipefail

DEPLOY_PATH="${DEPLOY_PATH:-/home/${USER:-deploy}/apps/portfolio-hub}"
COMPOSE_FILE="${COMPOSE_FILE:-docker-compose.yml}"
APP_PORT="${APP_PORT:-8080}"
APP_BIND_IP="${APP_BIND_IP:-0.0.0.0}"
HEALTHCHECK_URL="${HEALTHCHECK_URL:-http://127.0.0.1:${APP_PORT}/healthz}"
IMAGE_TAG="${IMAGE_TAG:-latest}"
SERVICE_NAME="${SERVICE_NAME:-portfolio-hub}"

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

export IMAGE_TAG APP_PORT APP_BIND_IP

"${COMPOSE_CMD[@]}" -f "$COMPOSE_FILE" pull
"${COMPOSE_CMD[@]}" -f "$COMPOSE_FILE" up -d

# Prefer the real published port reported by Docker Compose.
# Some compose versions can fail transiently here; keep fallback to APP_PORT.
detected_port=""
if port_output="$("${COMPOSE_CMD[@]}" -f "$COMPOSE_FILE" port "$SERVICE_NAME" 80 2>/dev/null)"; then
  detected_port="$(
    printf '%s\n' "$port_output" |
      head -n1 |
      awk -F: '{print $NF}' |
      tr -d '[:space:]'
  )"
fi

if [[ "$detected_port" =~ ^[0-9]+$ ]]; then
  HEALTHCHECK_URL="http://127.0.0.1:${detected_port}/healthz"
fi

if command -v curl >/dev/null 2>&1; then
  for attempt in {1..20}; do
    if curl -fsS "$HEALTHCHECK_URL" >/dev/null; then
      echo "Deployment successful (healthcheck OK)."
      exit 0
    fi
    sleep 2
  done

  echo "Deployment finished but healthcheck failed: $HEALTHCHECK_URL" >&2
  "${COMPOSE_CMD[@]}" -f "$COMPOSE_FILE" ps || true
  "${COMPOSE_CMD[@]}" -f "$COMPOSE_FILE" logs --tail=120 "$SERVICE_NAME" || true
  exit 1
fi

echo "curl not found; deployment executed without healthcheck verification."
