export type Project = {
  slug: string
  name: string
  tagline: string
  stack: string[]
  highlights: string[]
  demoUrl?: string
  codeUrl?: string
  imageUrl: string
}

export const projects: Project[] = [
  {
    slug: 'onigirishop',
    name: 'OnigiriShop',
    tagline:
      'Boutique en ligne orientée expérience utilisateur et parcours de commande fluide.',
    stack: ['ASP.NET Core', 'React', 'Docker'],
    highlights: [
      'Architecture claire API + frontend.',
      'Parcours d’achat structuré avec gestion des états.',
      'Déploiement continu sur environnement live.',
    ],
    demoUrl: 'https://onigirishop.onrender.com/',
    codeUrl: 'https://github.com/arnaud-wissart/OnigiriShop',
    imageUrl: '/assets/projects/onigirishop.jpg',
  },
  {
    slug: 'bikevoyager',
    name: 'BikeVoyager',
    tagline:
      'Application autour du vélo avec interface centrée sur la lisibilité et l’efficacité.',
    stack: ['ASP.NET Core', 'React', 'SQL'],
    highlights: [
      'Interface optimisée pour la consultation rapide.',
      'Structuration des données pour évolution progressive.',
      'Pipeline CI/CD prêt pour itérations rapides.',
    ],
    demoUrl: 'https://bike.arnaud.wissart.fr',
    codeUrl: 'https://github.com/arnaud-wissart/BikeVoyager',
    imageUrl: '/assets/projects/bikevoyager.jpg',
  },
  {
    slug: 'proba-loto-euromillions',
    name: 'Probabilités Loto & EuroMillions',
    tagline:
      'Démonstrateur pédagogique pour explorer les probabilités de jeux de hasard.',
    stack: ['TypeScript', 'Statistiques', 'UI Web'],
    highlights: [
      'Visualisation directe des probabilités clés.',
      'Expérience simple pour un usage grand public.',
      'Code organisé pour enrichissement des scénarios.',
    ],
    demoUrl: 'https://loto.arnaud.wissart.fr',
    codeUrl: 'https://github.com/arnaud-wissart/proba-loto-euromillions',
    imageUrl: '/assets/projects/loto.jpg',
  },
  {
    slug: 'tetris',
    name: 'Tetris',
    tagline:
      'Version web du classique Tetris, orientée performance et réactivité.',
    stack: ['TypeScript', 'Canvas', 'Game loop'],
    highlights: [
      'Gameplay fluide avec logique de collisions.',
      'Gestion des scores et progression continue.',
      'Démo légère et immédiate côté navigateur.',
    ],
    demoUrl: 'https://tetris.arnaud.wissart.fr',
    imageUrl: '/assets/projects/tetris.jpg',
  },
  {
    slug: 'nvconso',
    name: 'NVConso',
    tagline: 'Projet de suivi et visualisation de consommation.',
    stack: ['.NET', 'SQL', 'Docker'],
    highlights: [
      'Modèle de données orienté analyse.',
      'Code prêt pour automatisation de tests.',
      'Base exploitable pour dashboards métiers.',
    ],
    codeUrl: 'https://github.com/arnaud-wissart/NVConso',
    imageUrl: '/assets/projects/nvconso.jpg',
  },
  {
    slug: 'demoredis',
    name: 'DemoRedis',
    tagline: 'Proof of concept Redis pour performance et cache applicatif.',
    stack: ['.NET', 'Redis', 'Docker'],
    highlights: [
      'Cas d’usage concrets de cache.',
      'Temps de réponse améliorés sur scénarios ciblés.',
      'Structure simple pour démonstration technique.',
    ],
    codeUrl: 'https://github.com/arnaud-wissart/DemoRedis',
    imageUrl: '/assets/projects/demoredis.jpg',
  },
]
