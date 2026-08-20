export type Project = {
  slug: string
  name: string
  typeLabel: string
  tagline: string
  context: string
  keyDecisions: string[]
  qualityAndDelivery: string[]
  result: string
  stack: string[]
  demoUrl?: string
  releaseUrl?: string
  codeUrl?: string
  imageUrl: string
  imageAlt: string
  secondaryImageUrl?: string
  secondaryImageAlt?: string
}

export const projects: Project[] = [
  {
    slug: 'bikevoyager',
    name: 'BikeVoyager',
    typeLabel: 'Application full-stack',
    tagline:
      'Planification d’itinéraires vélo avec API .NET 10, interface React, moteur Valhalla, POI et synchronisation cloud.',
    context:
      'Construire une application full-stack réellement exploitable pour préparer des parcours vélo, tout en gardant une architecture lisible, des intégrations externes isolées et une chaîne de livraison reproductible.',
    keyDecisions: [
      'Séparer le domaine, l’application et l’infrastructure côté .NET, avec une API HTTP canonique versionnée sous /api/v1.',
      'Isoler Valhalla, Overpass, Google Drive et OneDrive derrière le backend afin de garder le client React indépendant des détails d’intégration.',
      'Appliquer des garde-fous concrets côté API : origines autorisées, cookies HttpOnly, rate limiting et headers de sécurité.',
    ],
    qualityAndDelivery: [
      'Tests backend xUnit, tests frontend Vitest et parcours E2E Playwright intégrés à la CI.',
      'Orchestration locale via .NET Aspire et exécution reproductible via Docker Compose.',
      'Déploiement manuel versionné par GitHub Actions sur runner Linux self-hosted, avec démo publique accessible.',
    ],
    result:
      'Une application publique complète qui rend visibles à la fois le niveau full-stack, les choix d’architecture, les intégrations externes, la sécurité et le delivery.',
    stack: [
      '.NET 10 / ASP.NET Core',
      'React / TypeScript',
      'Valhalla / Overpass',
      'Google Drive / OneDrive',
      'Aspire / Docker',
      'xUnit / Vitest / Playwright',
    ],
    demoUrl: 'https://bike.arnaudwissart.fr',
    codeUrl: 'https://github.com/arnaud-wissart-lab/BikeVoyager',
    imageUrl: '/assets/projects/bikevoyager.jpg',
    imageAlt:
      'Capture de BikeVoyager montrant l’interface de préparation et de consultation d’un parcours vélo.',
  },
  {
    slug: 'blazor-enterprise-starter',
    name: 'BlazorEnterpriseStarter',
    typeLabel: 'Starter applicatif',
    tagline:
      'Starter .NET avec Blazor Web App, API ASP.NET Core séparée, design system et module backlog exploitable.',
    context:
      'Poser une base métier réutilisable pour démarrer ou remettre au clair une application web .NET, avec un front, une API, des contrats partagés et un lancement local simple.',
    keyDecisions: [
      'Séparer la Blazor Web App, l’API ASP.NET Core et les contrats partagés pour garder des frontières nettes.',
      'Isoler un design system et une bibliothèque de composants réutilisables au lieu de disperser la logique UI dans les pages.',
      'Ancrer la démonstration sur un module backlog concret avec recherche, filtres, pagination et CRUD.',
    ],
    qualityAndDelivery: [
      'Tests unitaires, composants et E2E ciblés présents dans la solution.',
      'Lancement local via .NET Aspire ou Docker selon le contexte.',
      'Captures, documentation de structure et CI GitHub Actions pour relire la base sans dépendre du seul code source.',
    ],
    result:
      'Un socle .NET multi-projets lisible, démontrable et directement reprenable pour lancer ou recadrer une application métier web.',
    stack: [
      'Blazor Web App',
      'ASP.NET Core',
      'EF Core / SQLite',
      'Design system',
      'Aspire / Docker',
      'Playwright',
    ],
    demoUrl: 'https://blazor.arnaudwissart.fr/',
    codeUrl: 'https://github.com/arnaud-wissart-lab/blazor-enterprise-starter',
    imageUrl: '/assets/projects/blazor-enterprise-starter-home.png',
    imageAlt:
      'Capture de BlazorEnterpriseStarter montrant la page d’accueil du starter, son positionnement et les accès aux parcours principaux.',
    secondaryImageUrl: '/assets/projects/blazor-enterprise-starter-backlog.png',
    secondaryImageAlt:
      'Capture de BlazorEnterpriseStarter montrant le module backlog avec la liste des éléments, les filtres et les actions métier.',
  },
  {
    slug: 'layup-pulse',
    name: 'LayupPulse',
    typeLabel: 'Démonstrateur Windows',
    tagline:
      'Supervision WPF d’une cellule fictive de drapage composite, avec télémétrie temps réel, historique local et rapports de cycle.',
    context:
      'Démontrer une architecture .NET de supervision autour d’un simulateur déterministe, sans présenter l’application, ses données ou ses automatismes comme un système industriel réel.',
    keyDecisions: [
      'Séparer l’application WPF et le simulateur par un contrat gRPC versionné, avec un domaine indépendant des technologies.',
      'Borner l’acquisition, l’historique, les agrégats et le rafraîchissement de l’interface pour maîtriser la télémétrie à haute fréquence.',
      'Limiter l’adoption de CODE Framework aux documents du rapport, avec export XPS natif et PDF disponible uniquement via une imprimante Windows.',
    ],
    qualityAndDelivery: [
      'Suite automatisée couvrant le domaine, les dépendances, la concurrence, la persistance SQLite et la sérialisation XPS.',
      'Paquet Windows x64 autonome soumis à un test de démarrage avant publication.',
      'Version 0.4.0 publiée avec aperçu paginé, impression Windows et export XPS du rapport de cycle.',
    ],
    result:
      'Un démonstrateur Windows téléchargeable et auditable qui rend visibles les choix d’architecture, de performance et de testabilité, sans prétendre commander une machine réelle.',
    stack: ['.NET 10', 'WPF', 'gRPC', 'SQLite / EF Core', 'CODE Framework'],
    releaseUrl:
      'https://github.com/arnaud-wissart-lab/layup-pulse/releases/latest',
    codeUrl: 'https://github.com/arnaud-wissart-lab/layup-pulse',
    imageUrl: '/assets/projects/layup-pulse-overview.png',
    imageAlt:
      'Capture de LayupPulse pendant un cycle simulé, avec vue 3D fictive, télémétrie, tendances et commandes de démonstration.',
  },
  {
    slug: 'onigirishop',
    name: 'OnigiriShop',
    typeLabel: 'Application e-commerce',
    tagline:
      'Boutique Blazor Server avec catalogue, panier, commande, back-office, authentification et sauvegarde de base.',
    context:
      'Construire une application e-commerce métier cohérente autour d’un catalogue, d’un tunnel de commande et d’un back-office, avec un accès aux données maîtrisé et une exploitation simple.',
    keyDecisions: [
      'S’appuyer sur Blazor Server pour unifier l’interface et la logique applicative tout en gardant des services métier dédiés.',
      'Utiliser Dapper et SQLite pour conserver un accès aux données explicite, complété par FluentMigrator pour versionner la base.',
      'Isoler les parcours d’authentification et d’administration, avec des routes dédiées et un mécanisme de sauvegarde automatique de la base.',
    ],
    qualityAndDelivery: [
      'Tests unitaires xUnit et tests E2E Playwright exécutés dans GitHub Actions.',
      'Dockerfile multi-stage .NET 8 pour rapprocher l’exécution locale et l’hébergement.',
      'Démo publique permettant de vérifier le catalogue, la navigation et les principaux parcours.',
    ],
    result:
      'Une application e-commerce .NET complète et démontrable, avec back-office, accès Dapper/SQLite, migrations et chaîne de tests.',
    stack: [
      '.NET 8 / Blazor Server',
      'Dapper / SQLite',
      'FluentMigrator',
      'xUnit / Playwright',
      'Docker',
    ],
    demoUrl: 'https://onigirishop.onrender.com/',
    codeUrl: 'https://github.com/arnaud-wissart-lab/OnigiriShop',
    imageUrl: '/assets/projects/onigirishop-desktop.png',
    imageAlt:
      'Capture desktop d’OnigiriShop montrant la page boutique avec la liste des produits, la navigation et le panier.',
    secondaryImageUrl: '/assets/projects/onigirishop-mobile.png',
    secondaryImageAlt:
      'Capture mobile d’OnigiriShop montrant l’interface e-commerce sur smartphone.',
  },
  {
    slug: 'nvconso',
    name: 'WattPilot',
    typeLabel: 'Utilitaire Windows',
    tagline:
      'Suivi de consommation GPU NVIDIA et application de profils de limite de puissance avec télémétrie persistante et mises à jour automatiques.',
    context:
      'Créer un outil Windows concret pour suivre la consommation d’un GPU NVIDIA, appliquer des limites de puissance de manière contrôlée et conserver un historique local exploitable.',
    keyDecisions: [
      'Conserver une application principale WPF unique, avec élévation UAC uniquement pour les actions réellement privilégiées.',
      'Passer par NVML pour la télémétrie et les limites de puissance sans toucher aux ventilateurs, à l’affichage ou aux profils Windows.',
      'Distribuer WattPilot en installateur auto-misable à jour via Velopack tout en conservant un ZIP portable.',
    ],
    qualityAndDelivery: [
      'CI qui compile, teste et protège plusieurs invariants de sécurité et de packaging.',
      'Historique GPU persistant localement avec documentation dédiée à la télémétrie.',
      'Releases publiques avec installateur, archive portable et sommes SHA256.',
    ],
    result:
      'Un utilitaire Windows réellement distribuable, centré sur une fonction matérielle précise et accompagné d’une chaîne de release exploitable.',
    stack: ['.NET 10', 'WPF', 'NVML', 'Velopack', 'xUnit', 'GitHub Actions'],
    releaseUrl: 'https://github.com/arnaud-wissart-lab/NVConso/releases/latest',
    codeUrl: 'https://github.com/arnaud-wissart-lab/NVConso',
    imageUrl: '/assets/projects/nvconso.jpg',
    imageAlt:
      'Capture de WattPilot présentant le suivi de consommation GPU et les profils de puissance.',
  },
  {
    slug: 'proba-loto-euromillions',
    name: 'Probabilités Loto & EuroMillions',
    typeLabel: 'Plateforme .NET',
    tagline:
      'Ingestion automatisée des tirages FDJ, statistiques, génération de grilles et abonnements e-mail avec API et worker planifié.',
    context:
      'Construire une plateforme .NET complète autour de données publiques de tirages : ingestion robuste, stockage relationnel, calculs, interface web, planification et exploitation observable.',
    keyDecisions: [
      'Séparer interface Blazor, API ASP.NET Core et worker Quartz, orchestrés localement avec .NET Aspire.',
      'Persister les tirages et l’historique d’envoi dans PostgreSQL via EF Core, avec ingestion CSV/Excel tolérante.',
      'Rendre les envois idempotents et ajouter logs structurés, OpenTelemetry et health checks pour rendre l’exploitation visible.',
    ],
    qualityAndDelivery: [
      'Tests unitaires et intégration API/PostgreSQL via Testcontainers.',
      'CI restore/build/test/format et stack Docker Compose complète.',
      'Démo publique pour les statistiques, grilles et parcours principaux.',
    ],
    result:
      'Une plateforme .NET 10 multi-processus démontrant ingestion de données, planification, persistance, observabilité et qualité automatisée.',
    stack: [
      '.NET 10 / ASP.NET Core',
      'Blazor Server / MudBlazor',
      'PostgreSQL / EF Core',
      'Quartz',
      'OpenTelemetry',
      'Aspire / Docker',
    ],
    demoUrl: 'https://loto.arnaudwissart.fr',
    codeUrl: 'https://github.com/arnaud-wissart-lab/Proba-loto-euromillions',
    imageUrl: '/assets/projects/loto.jpg',
    imageAlt:
      'Capture du projet Probabilités Loto et EuroMillions avec statistiques et résultats calculés.',
  },
  {
    slug: 'tetris',
    name: 'Tetrigular',
    typeLabel: 'Démonstrateur Angular',
    tagline:
      'Jeu Tetris-like Angular avec moteur découplé, boucle requestAnimationFrame, rendu Canvas et chaîne de qualité frontend.',
    context:
      'Démontrer une architecture frontend structurée sur un sujet temps réel : règles de jeu déterministes, moteur indépendant de l’affichage et interactions clavier réactives.',
    keyDecisions: [
      'Séparer input, domaine, moteur et UI afin que les règles de jeu restent testables indépendamment du rendu.',
      'Utiliser requestAnimationFrame et un rendu Canvas 2D pour garder la maîtrise de la boucle et des animations.',
      'Implémenter des règles explicites : DAS/ARR, hard drop, rotations, scoring déterministe et randomizer 7-bag.',
    ],
    qualityAndDelivery: [
      'Tests unitaires, ESLint, build production et audit sécurité intégrés à la CI GitHub Actions.',
      'Déploiement manuel documenté avec image Docker Nginx.',
      'Démo publique permettant de vérifier directement la réactivité et la jouabilité.',
    ],
    result:
      'Un démonstrateur Angular centré sur la séparation des responsabilités, la logique temps réel et la qualité d’un frontend interactif.',
    stack: ['Angular', 'TypeScript', 'Canvas 2D', 'Vitest', 'Docker / Nginx'],
    demoUrl: 'https://tetris.arnaudwissart.fr',
    codeUrl: 'https://github.com/arnaud-wissart-lab/Tetrigular',
    imageUrl: '/assets/projects/tetris.jpg',
    imageAlt:
      'Capture de Tetrigular avec la grille du jeu, les pièces en cours et le panneau de score.',
  },
]
