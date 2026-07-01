# Portfolio Hub - Arnaud Wissart

[![CI](https://github.com/arnaud-wissart-lab/Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/arnaud-wissart-lab/Portfolio/actions/workflows/ci.yml)
[![Deploy](https://github.com/arnaud-wissart-lab/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/arnaud-wissart-lab/Portfolio/actions/workflows/deploy.yml)

Site vitrine statique (Vite + React + TypeScript + Tailwind) pour présenter Arnaud Wissart et centraliser les liens vers les démos en ligne et les dépôts GitHub.

## Stack

- Vite + React + TypeScript
- Tailwind CSS
- ESLint + Prettier
- Vitest + Testing Library
- Docker multi-stage
- Nginx (headers de sécurité + SPA fallback)
- GitHub Actions (CI + Deploy)

## Lancer en local

Prérequis recommandés :

- Node.js `>=22.12 <25`
- npm `>=10`

```bash
npm ci
npm run dev
```

Le site est disponible sur `http://localhost:5173`.

## Qualité et build

```bash
npm run lint
npm run format:check
npm run test
npm run build
```

Le build statique est généré dans `dist/`.

## Docker

```bash
docker build -t portfolio-hub:local .
docker run --rm -p 8080:80 portfolio-hub:local
```

Le site est servi sur `http://localhost:8080`.

## Déploiement production

Le workflow de déploiement pousse l’image sur GHCR puis exécute un déploiement distant idempotent via SSH :

- `docker compose pull`
- `docker compose up -d`
- healthcheck HTTP (`/healthz`)

Le workflow utilise `scripts/deploy-remote.sh`.

### 1. Préparer la machine Docker de production

1. Définir le chemin de déploiement via `DEPLOY_PATH` ou `SSH_PATH`, par exemple :
   - `/home/arnaud/apps/portfolio-hub` (recommandé sans sudo)
   - `/opt/apps/portfolio-hub` (possible si les permissions sont configurées)
2. Le workflow crée automatiquement ce dossier à la première exécution.
3. Si `docker-compose.yml` est absent, le workflow crée automatiquement un template minimal.
4. Vérifier que la machine peut exécuter `docker compose`.

Si aucun chemin n’est fourni, le fallback automatique est `/home/<user>/apps/portfolio-hub`.

Exposition recommandée :

- Reverse proxy sur l’hôte Docker : `DEPLOY_BIND_IP=127.0.0.1`
- Reverse proxy en conteneur : `DEPLOY_BIND_IP=0.0.0.0`

Dans les deux cas, le port applicatif par défaut est `8080`.

### 2. Configurer GitHub Actions

Variables ou secrets requis :

- `DEPLOY_HOST` : IP ou DNS de la machine Docker de production
- `DEPLOY_USER` : utilisateur SSH
- `DEPLOY_SSH_KEY` : clé privée SSH au format OpenSSH, à stocker en secret

Variables ou secrets optionnels :

- `DEPLOY_PATH` : chemin distant de déploiement
- `DEPLOY_PORT` : port SSH, par défaut `22`
- `DEPLOY_APP_PORT` : port HTTP local de l’application, par défaut `8080`
- `APP_PORT` : alias accepté pour `DEPLOY_APP_PORT`
- `DEPLOY_BIND_IP` : IP de bind locale, par défaut `0.0.0.0`
- `APP_BIND_IP` : alias accepté pour `DEPLOY_BIND_IP`
- `PUBLIC_URL` : URL publique prioritaire injectée au build
- `DOMAIN` : fallback pour construire l’URL publique, par exemple `arnaudwissart.fr`
- `GHCR_TOKEN` : jeton utilisé pour le `docker login ghcr.io` distant, sinon `GITHUB_TOKEN` est utilisé

Compatibilité legacy :

- `SSH_HOST`
- `SSH_USER`
- `SSH_PRIVATE_KEY`
- `SSH_PORT`
- `SSH_PATH`

Le script de déploiement détecte automatiquement le port publié réel avec `docker compose port` pour le healthcheck.

### 3. Lancer le déploiement

Deux modes sont disponibles :

- Automatique : push sur `main`
- Manuel : onglet Actions, workflow **Deploy**, puis `Run workflow`

## Configuration du domaine

Valeur par défaut : `https://arnaudwissart.fr`.

Pour modifier l’URL publique :

1. Définir `VITE_PUBLIC_URL=...` dans `.env` pour le build front local.
2. Définir `PUBLIC_URL` ou `DOMAIN` dans GitHub Actions pour le build de production.
3. Exécuter `npm run seo:sync` pour régénérer `public/robots.txt` et `public/sitemap.xml` si besoin.

## Modifier les données du site

Tout est data-driven :

- Données globales : `src/data/site.ts`
- Projets : `src/data/projects.ts`

Important :

- Ne pas inventer de démo ou de dépôt non confirmé.
- Si un dépôt n’est pas connu, laisser `codeUrl` vide.
- Le bouton **Code** s’affiche seulement si `codeUrl` est renseigné.

## Assets à remplacer

Images fournies :

- `public/assets/avatar-placeholder.jpg`
- `public/assets/og/portfolio.png`
- `public/assets/projects/onigirishop.jpg`
- `public/assets/projects/bikevoyager.jpg`
- `public/assets/projects/loto.jpg`
- `public/assets/projects/tetris.jpg`
- `public/assets/projects/nvconso.jpg`

Vous pouvez remplacer ces fichiers sans changer le code.

## CI/CD

- `ci.yml` : installation, lint, format, tests et build sur push/PR
- `deploy.yml` : build/push GHCR + déploiement SSH sur `main` et `workflow_dispatch`

Étiquetage des images :

- `latest` sur la branche par défaut
- `sha-<GITHUB_SHA>` pour la traçabilité

## Checklist production

- DNS `arnaudwissart.fr` vers le reverse proxy
- HTTPS/TLS actif côté reverse proxy
- Route reverse proxy vers `http://<docker-host>:8080`
- Open Graph image valide : `/assets/og/portfolio.png`
- `robots.txt` et `sitemap.xml` vérifiés
