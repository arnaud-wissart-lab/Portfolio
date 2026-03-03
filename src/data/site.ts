export type SocialLink = {
  label: string
  url: string
}

export type SiteConfig = {
  fullName: string
  headline: string
  valueProposition: string
  email: string
  publicUrl: string
  siteRepoUrl: string
  socialLinks: SocialLink[]
  stackAndPractices: string[]
  aboutLines: string[]
}

const defaultPublicUrl = 'https://arnovissard.fr'
const envPublicUrl = import.meta.env.VITE_PUBLIC_URL?.trim()
const normalizedPublicUrl = (envPublicUrl || defaultPublicUrl).replace(
  /\/+$/,
  '',
)

export const siteConfig: SiteConfig = {
  fullName: 'Arnaud Wissart',
  headline: 'Développeur .NET Full-Stack (ASP.NET Core / React)',
  valueProposition:
    'Je conçois et livre des applications robustes avec une exigence forte sur la qualité, les tests automatisés et les pipelines CI/CD.',
  email: 'contact@arnovissard.fr',
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
  stackAndPractices: [
    '.NET 8+',
    'ASP.NET Core Web API',
    'React + TypeScript',
    'SQL / modélisation de données',
    'Docker',
    'CI/CD GitHub Actions',
    'Tests unitaires et d’intégration',
    'Revue de code et qualité continue',
  ],
  aboutLines: [
    'Développeur full-stack orienté produit, avec une base solide côté backend .NET et API REST.',
    'Je privilégie les architectures simples à maintenir et des cycles de livraison courts.',
    'J’accorde une attention particulière à la qualité de code, aux tests automatisés et à la traçabilité des changements.',
    'Je travaille avec Docker et GitHub Actions pour industrialiser les builds et les déploiements.',
    'Mon objectif est de livrer des fonctionnalités utiles, stables et mesurables rapidement.',
  ],
}
