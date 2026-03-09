export type SocialLink = {
  label: string
  url: string
}

export type WorkMethodStep = {
  title: string
  description: string
}

export type SkillGroup = {
  title: string
  description: string
  items: string[]
}

export type InterventionArea = {
  title: string
  description: string
}

export type SiteConfig = {
  fullName: string
  heroBadge: string
  headline: string
  valueProposition: string
  heroDescription: string
  email: string
  publicUrl: string
  siteRepoUrl: string
  socialLinks: SocialLink[]
  heroProofs: string[]
  heroFocus: string[]
  interventionAreas: InterventionArea[]
  workMethodSteps: WorkMethodStep[]
  skillGroups: SkillGroup[]
}

const defaultPublicUrl = 'https://arnaudwissart.fr'
const envPublicUrl = import.meta.env.VITE_PUBLIC_URL?.trim()
const normalizedPublicUrl = (envPublicUrl || defaultPublicUrl).replace(
  /\/+$/,
  '',
)

export const siteConfig: SiteConfig = {
  fullName: 'Arnaud Wissart',
  heroBadge: 'Arnaud Wissart • Développeur .NET / web',
  headline:
    'Développeur .NET / web expérimenté pour reprendre, remettre au clair et faire évoluer vos applications',
  valueProposition:
    'Je reprends des applications .NET / web, clarifie leur structure, sécurise les changements et prépare des mises en ligne fiables.',
  heroDescription:
    'API ASP.NET Core, interfaces React ou Angular, SQL, tests ciblés, Docker et chaînes de build : j’interviens avec une logique de lisibilité, de réduction du risque et de continuité de service.',
  email: 'contact@arnaudwissart.fr',
  publicUrl: normalizedPublicUrl,
  siteRepoUrl:
    import.meta.env.VITE_SITE_REPO_URL ||
    'https://github.com/arnaud-wissart-lab/Portfolio',
  socialLinks: [
    {
      label: 'LinkedIn',
      url: '',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/arnaud-wissart',
    },
  ],
  heroProofs: [
    '.NET récent et legacy',
    'ASP.NET Core, React, Angular',
    'Tests ciblés, revue de code, dette contenue',
    'Docker, GitHub Actions, livraisons répétables',
  ],
  heroFocus: [
    'Reprise d’applications en service et évolution par étapes',
    'Découpage clair entre interface, API et données',
    'Contrôles utiles avant livraison',
    'Mises en ligne courtes sans fragiliser la production',
  ],
  interventionAreas: [
    {
      title: 'Reprise d’existant .NET / web',
      description:
        'Reprise d’applications déjà en service, lecture des flux réels et repérage des zones fragiles avant toute intervention.',
    },
    {
      title: 'Modernisation progressive',
      description:
        'Évolution du socle par étapes utiles : mise à niveau technique, extraction ciblée, refonte d’interface ou découpage sans rupture brutale.',
    },
    {
      title: 'Remise au clair de la structure',
      description:
        'Répartition nette des responsabilités entre interface, API, logique métier et données pour sortir des dépendances floues.',
    },
    {
      title: 'Sécurisation des changements',
      description:
        'Mise en place de garde-fous adaptés au risque : tests ciblés, vérifications de build, conventions lisibles et points de contrôle utiles.',
    },
    {
      title: 'Industrialisation CI/CD',
      description:
        'Structuration des pipelines, des environnements et de la conteneurisation pour rendre les livraisons plus reproductibles.',
    },
    {
      title: 'Préparation de mise en production',
      description:
        'Sécurisation de la dernière ligne droite : configuration, dépendances, secrets, validation avant ouverture au trafic et retour arrière simple.',
    },
  ],
  workMethodSteps: [
    {
      title: 'Comprendre le besoin et l’existant',
      description:
        'Je pars des usages, des irritants et des contraintes de production avant de proposer une trajectoire d’évolution réaliste.',
    },
    {
      title: 'Clarifier la structure',
      description:
        'Je répartis clairement interface, API, logique métier et données pour éviter les dépendances floues et les contournements fragiles.',
    },
    {
      title: 'Sécuriser les changements',
      description:
        'Je mets en place des contrôles utiles : tests ciblés, vérifications, conventions lisibles et revues de code là où le risque le justifie.',
    },
    {
      title: 'Fiabiliser la livraison',
      description:
        'Je fiabilise le build, les environnements, la conteneurisation et le pipeline pour rendre la mise en ligne reproductible.',
    },
    {
      title: 'Laisser une base reprenable',
      description:
        'Je laisse une base compréhensible : scripts utiles, conventions, points d’attention et documentation légère pour la suite.',
    },
  ],
  skillGroups: [
    {
      title: 'Legacy & modernisation',
      description:
        'Reprendre un socle en service, clarifier ses contraintes et définir une trajectoire d’évolution sans casser l’exploitation.',
      items: [
        'Lecture de code existant et repérage des zones à risque avant modification.',
        'Évolution progressive de socles .NET ou web sans réécriture brutale.',
        'Réduction de dette technique sans bloquer les livraisons utiles.',
      ],
    },
    {
      title: 'APIs et backend .NET',
      description:
        'Concevoir ou reprendre des backends .NET lisibles, testables et capables d’évoluer sans accumuler des dépendances floues.',
      items: [
        'ASP.NET Core, logique métier explicite et séparation claire des responsabilités.',
        'Découpage entre services, accès aux données et contrats d’échange.',
        'Un backend utile au métier autant qu’à la reprise du code.',
      ],
    },
    {
      title: 'Frontend maintenable',
      description:
        'Construire des interfaces web lisibles, stables et simples à reprendre, sans complexité de façade inutile.',
      items: [
        'React, Angular ou JavaScript selon le contexte réel du projet.',
        'Organisation des composants, états et flux pour limiter les régressions diffuses.',
        'Priorité à la lisibilité du parcours utilisateur et du code qui le porte.',
      ],
    },
    {
      title: 'Données et persistance',
      description:
        'Structurer la donnée pour soutenir les usages métier, faciliter l’analyse et éviter les impasses de reprise.',
      items: [
        'Modélisation SQL orientée usages et évolution progressive du schéma.',
        'Séparation entre stockage, restitution et règles métier.',
        'Bases préparées pour APIs, tableaux de bord ou traitements complémentaires.',
      ],
    },
    {
      title: 'DevOps / CI/CD',
      description:
        'Industrialiser le build et la mise en ligne pour rendre la livraison plus prévisible et moins fragile.',
      items: [
        'Docker, scripts de build et GitHub Actions pour des exécutions reproductibles.',
        'Chaînes de validation simples avant déploiement.',
        'Fiabilisation des environnements et de la publication en ligne.',
      ],
    },
    {
      title: 'Qualité, tests et fiabilité',
      description:
        'Mettre en place des garde-fous utiles, adaptés au risque et au niveau de maturité réel de l’application.',
      items: [
        'Tests unitaires ou d’intégration ciblés là où ils sécurisent vraiment le changement.',
        'Revues de code, conventions lisibles et refactorisations ciblées.',
        'Recherche de stabilité avant livraison, sans mécanique décorative.',
      ],
    },
  ],
}
