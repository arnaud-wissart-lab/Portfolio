# Portfolio Hub - Arnaud Wissart

Site vitrine statique (Vite + React + TypeScript + Tailwind) pour presenter Arnaud Wissart et centraliser les liens vers les demos live et les repos GitHub.

## Stack

- Vite + React + TypeScript
- Tailwind CSS
- ESLint + Prettier
- Vitest + Testing Library
- Docker multi-stage
- Nginx (headers securite + SPA fallback)
- GitHub Actions (CI + Deploy)

## Lancer en local

Prerequis recommande: Node.js 22 LTS.

```bash
npm ci
npm run dev
```

Le site est disponible sur `http://localhost:5173`.

## Build

```bash
npm run lint
npm run test
npm run build
```

Le build statique est genere dans `dist/`.

## Docker (build et run)

```bash
docker build -t portfolio-hub:local .
docker run --rm -p 8080:80 portfolio-hub:local
```

Le site est servi sur `http://localhost:8080`.

## Deploiement production

Le workflow de deploiement pousse l'image sur GHCR puis execute un deploiement distant idempotent via SSH:

- `docker compose pull`
- `docker compose up -d`
- healthcheck HTTP (`/healthz`)

### 1) Preparer la machine Docker de prod

1. Definir le chemin de deploiement (via `DEPLOY_PATH` ou `SSH_PATH`), par exemple:
   - `/home/arnaud/apps/portfolio-hub` (recommande sans sudo)
   - `/opt/apps/portfolio-hub` (possible si permissions configurees)
2. Le workflow cree automatiquement ce dossier a la premiere execution.
3. Si `docker-compose.yml` est absent, le workflow cree automatiquement un template minimal.
4. Verifier que la machine peut faire `docker compose`.
5. Optionnel: si image privee, faire `docker login ghcr.io` sur la machine.

Exposition recommandee (safe): `127.0.0.1:8080:80`, puis reverse proxy (Traefik / Nginx Proxy Manager / Caddy) pour TLS.

### 2) Configurer les secrets GitHub Actions

Secrets requis:

- `DEPLOY_HOST` (IP/DNS de la machine Docker de prod)
- `DEPLOY_USER` (utilisateur SSH)
- `DEPLOY_SSH_KEY` (cle privee SSH, format OpenSSH)
- `DEPLOY_PATH` (ex: `/opt/portfolio-hub`, fallback par defaut: `/opt/portfolio-hub`)

Secrets optionnels:

- `DEPLOY_PORT` (defaut `22`)
- `DEPLOY_APP_PORT` (port HTTP local de l'app, defaut `8080`)
- `APP_PORT` (alias accepte)
- `PUBLIC_URL` (prioritaire pour injecter l'URL publique au build)
- `DOMAIN` (fallback, ex: `arnovissard.fr`)

Notes:

- `DEPLOY_SSH_KEY` doit rester un secret.
- `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_PATH`, `DEPLOY_PORT` peuvent etre configures en `Repository secrets` ou `Repository variables`.
- Compatibilite legacy: le workflow accepte aussi `SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY`, `SSH_PORT` (et `SSH_PATH` si vous l'utilisez deja).
- Si aucun chemin n'est fourni, fallback automatique: `/home/<user>/apps/portfolio-hub`.
- Le workflow effectue un `docker login ghcr.io` a distance avant le `pull` (avec `GHCR_TOKEN` si fourni, sinon `GITHUB_TOKEN`).
- En cas de collision de port, definir `DEPLOY_APP_PORT` (ex: `18080`).
- Le script de deploiement detecte aussi automatiquement le port publie reel (`docker compose port`) pour le healthcheck.

### 3) Lancer le deploiement ("bouton magique")

Deux modes:

- Automatique: push sur `main`
- Manuel: onglet Actions -> workflow **Deploy** -> `Run workflow`

Le workflow utilise `scripts/deploy-remote.sh`.

## Configuration du domaine (arnovissard.fr par defaut)

Valeur par defaut: `https://arnovissard.fr`.

Modifier:

1. `.env` (`VITE_PUBLIC_URL=...`) pour le runtime/build front
2. `npm run seo:sync` pour regenerer `public/robots.txt` et `public/sitemap.xml`

## Modifier les donnees du site

Tout est data-driven:

- Donnees globales: `src/data/site.ts`
- Projets: `src/data/projects.ts`

Important:

- Ne pas inventer de demo/repo non confirme.
- Si un repo n'est pas connu, laisser `codeUrl` vide.
- Le bouton **Code** s'affiche seulement si `codeUrl` est renseigne.

## Assets a remplacer

Placeholders fournis:

- `public/assets/avatar-placeholder.jpg`
- `public/assets/og/portfolio.png`
- `public/assets/projects/onigirishop.jpg`
- `public/assets/projects/bikevoyager.jpg`
- `public/assets/projects/loto.jpg`
- `public/assets/projects/tetris.jpg`
- `public/assets/projects/nvconso.jpg`
- `public/assets/projects/demoredis.jpg`

Vous pouvez remplacer ces fichiers sans changer le code.

## CI/CD

- `ci.yml`: lint + test + build sur push/PR
- `deploy.yml`: build/push GHCR + deploiement SSH sur `main` et `workflow_dispatch`

Tagging image:

- `latest` sur branche par defaut
- `sha-<GITHUB_SHA>` pour tracabilite

## Checklist production

- DNS `arnovissard.fr` vers votre reverse proxy
- HTTPS/TLS actif cote reverse proxy
- Route reverse proxy vers `http://<docker-host>:8080`
- Open Graph image valide: `/assets/og/portfolio.png`
- Verifier `robots.txt` et `sitemap.xml`
