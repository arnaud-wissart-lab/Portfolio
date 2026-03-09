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
  items: string[]
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
    'Développeur .NET / web expérimenté pour moderniser et fiabiliser vos applications',
  valueProposition:
    'Je reprends des applications .NET / web, clarifie l’architecture, sécurise la qualité et fiabilise la mise en production.',
  heroDescription:
    'APIs ASP.NET Core, interfaces React ou Angular, SQL, tests automatisés, Docker et CI/CD : j’interviens avec une approche pragmatique, orientée lisibilité, réduction du risque et continuité de livraison.',
  email: 'contact@arnaudwissart.fr',
  publicUrl: normalizedPublicUrl,
  siteRepoUrl:
    import.meta.env.VITE_SITE_REPO_URL ||
    'https://github.com/arnaud-wissart/portfolio',
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
    '.NET moderne et legacy',
    'ASP.NET Core, React, Angular',
    'Tests ciblés, revue de code, dette maîtrisée',
    'Docker, GitHub Actions, déploiement continu',
  ],
  heroFocus: [
    'Reprise d’existant et modernisation progressive',
    'Architecture web lisible et maintenable',
    'Qualité logicielle et pipelines CI/CD',
    'Livraisons courtes sans fragiliser la production',
  ],
  workMethodSteps: [
    {
      title: 'Comprendre le besoin et l’existant',
      description:
        'Je pars des usages, des irritants et des contraintes techniques réelles avant de proposer une trajectoire d’évolution réaliste.',
    },
    {
      title: 'Structurer une architecture maintenable',
      description:
        'Je clarifie les responsabilités entre interfaces, APIs, logique métier et données pour éviter les contournements fragiles.',
    },
    {
      title: 'Sécuriser la qualité et la validation',
      description:
        'Je mets en place des garde-fous utiles : tests ciblés, vérifications, conventions lisibles et revues de code orientées risque.',
    },
    {
      title: 'Industrialiser la livraison',
      description:
        'Je fiabilise le build, les environnements, la conteneurisation et les pipelines CI/CD pour rendre la mise en production reproductible.',
    },
    {
      title: 'Documenter et faciliter la reprise',
      description:
        'Je laisse une base compréhensible : scripts utiles, conventions, points d’attention et documentation légère pour la suite.',
    },
  ],
  skillGroups: [
    {
      title: 'Backend',
      items: [
        '.NET 8+ et .NET Framework',
        'ASP.NET Core Web API',
        'APIs et logique métier',
        'Reprise d’applications Web Forms ou ASP classique',
      ],
    },
    {
      title: 'Frontend',
      items: [
        'React + TypeScript',
        'Angular',
        'JavaScript et jQuery',
        'Interfaces web lisibles et maintenables',
      ],
    },
    {
      title: 'Base de données',
      items: [
        'SQL et modélisation de données',
        'Structuration pour l’évolutivité',
        'Exploitation orientée usages métiers',
      ],
    },
    {
      title: 'DevOps / CI/CD',
      items: [
        'Docker',
        'GitHub Actions',
        'Builds et déploiements reproductibles',
        'Mise en ligne et fiabilisation des environnements',
      ],
    },
    {
      title: 'Qualité / tests',
      items: [
        'Tests unitaires et d’intégration',
        'Revue de code',
        'Refactorisation ciblée',
        'Réduction de dette technique',
      ],
    },
  ],
}
