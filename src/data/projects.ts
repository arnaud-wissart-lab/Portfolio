export type Project = {
  slug: string
  name: string
  tier: 'primary' | 'secondary'
  typeLabel: string
  tagline: string
  context: string
  keyDecisions: string[]
  qualityAndDelivery: string[]
  result: string
  stack: string[]
  demoUrl?: string
  codeUrl?: string
  imageUrl: string
  imageAlt: string
  secondaryImageUrl?: string
  secondaryImageAlt?: string
}

export const projects: Project[] = [
  {
    slug: 'onigirishop',
    name: 'OnigiriShop',
    tier: 'primary',
    typeLabel: 'Application web',
    tagline:
      'Boutique en ligne avec API séparée, parcours de commande lisible et rendu cohérent sur desktop et mobile.',
    context:
      'Construire une boutique web claire, avec une séparation nette entre API et interface pour faire évoluer le parcours de commande sans rigidifier le code.',
    keyDecisions: [
      'Séparer l’API ASP.NET Core de l’interface React pour faire évoluer le parcours sans couplage excessif.',
      'Organiser catalogue, panier et commande autour de flux courts et relisibles.',
      'Utiliser Docker pour rapprocher exécution locale et exécution publiée.',
    ],
    qualityAndDelivery: [
      'Code public et démo en ligne pour relire le flux complet.',
      'Mise en ligne accessible pour valider le comportement hors poste de développement.',
      'Structure pensée pour faire évoluer le tunnel de commande sans reprise lourde.',
    ],
    result:
      'Le projet montre une base e-commerce claire, publiable et reprenable, avec des responsabilités bien séparées.',
    stack: ['ASP.NET Core', 'React', 'Docker'],
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
    slug: 'bikevoyager',
    name: 'BikeVoyager',
    tier: 'primary',
    typeLabel: 'Application web',
    tagline:
      'Application de consultation et de planification avec interface claire et socle de données exploitable.',
    context:
      'Organiser une application de consultation rapide tout en gardant un modèle de données capable d’évoluer sans remise à plat.',
    keyDecisions: [
      'Garder un socle ASP.NET Core + SQL simple à étendre sur un périmètre fonctionnel clair.',
      'Construire une interface React centrée sur la consultation rapide plutôt que sur l’accumulation d’écrans.',
      'Séparer données utiles à l’interface et logique de navigation pour limiter les régressions.',
    ],
    qualityAndDelivery: [
      'Code public et démo accessible pour vérifier l’ensemble.',
      'Socle de données conçu pour évoluer par étapes.',
      'Mise en ligne disponible pour contrôler le rendu et les flux principaux.',
    ],
    result:
      'Le projet montre une application web lisible, évolutive et livrable sans surcouche inutile.',
    stack: ['ASP.NET Core', 'React', 'SQL'],
    demoUrl: 'https://bike.arnaudwissart.fr',
    codeUrl: 'https://github.com/arnaud-wissart-lab/BikeVoyager',
    imageUrl: '/assets/projects/bikevoyager.jpg',
    imageAlt:
      'Capture de BikeVoyager avec une interface web de consultation orientée contenu et navigation claire.',
  },
  {
    slug: 'nvconso',
    name: 'NVConso',
    tier: 'primary',
    typeLabel: 'Application métier',
    tagline:
      'Application métier de suivi de consommation, centrée sur le modèle de données et la reprise du socle .NET.',
    context:
      'Poser un socle .NET et SQL orienté analyse pour rendre un suivi de consommation exploitable dans la durée.',
    keyDecisions: [
      'Structurer le modèle SQL autour des mesures, seuils et états utiles à l’analyse.',
      'Garder un socle .NET simple à reprendre pour brancher services, tests ou tableaux de bord.',
      'Isoler les règles métier des écrans pour éviter une reprise trop coûteuse.',
    ],
    qualityAndDelivery: [
      'Code public versionné pour relire la structure et les choix de modélisation.',
      'Socle Docker pour reconstruire rapidement un environnement de travail.',
      'Pas de démo en ligne à ce stade : l’évaluation passe par le code et la conception.',
    ],
    result:
      'Le projet montre une base métier orientée données, prête pour l’analyse et pour des évolutions ciblées.',
    stack: ['.NET', 'SQL', 'Docker'],
    codeUrl: 'https://github.com/arnaud-wissart-lab/NVConso',
    imageUrl: '/assets/projects/nvconso.jpg',
    imageAlt:
      'Capture de NVConso présentant un écran de suivi de consommation avec menus, données et synthèse visuelle.',
  },
  {
    slug: 'proba-loto-euromillions',
    name: 'Probabilités Loto & EuroMillions',
    tier: 'primary',
    typeLabel: 'Démonstrateur métier',
    tagline:
      'Démonstrateur web de probabilités conçu pour rendre une logique de calcul lisible.',
    context:
      'Rendre compréhensibles des calculs statistiques pour un public non spécialiste, avec une interface simple et un code facile à faire évoluer.',
    keyDecisions: [
      'Isoler les règles de calcul pour garder une logique vérifiable.',
      'Séparer hypothèses, résultats et présentation pour éviter un écran opaque.',
      'S’appuyer sur TypeScript pour garder un front léger et lisible.',
    ],
    qualityAndDelivery: [
      'Code public et démo en ligne pour confronter calculs et rendu.',
      'Structure légère, simple à republier.',
      'Organisation du code adaptée à l’ajout de nouveaux scénarios.',
    ],
    result:
      'Le projet montre comment rendre une logique métier lisible à la fois dans l’interface et dans le code.',
    stack: ['TypeScript', 'Statistiques', 'UI Web'],
    demoUrl: 'https://loto.arnaudwissart.fr',
    codeUrl: 'https://github.com/arnaud-wissart-lab/proba-loto-euromillions',
    imageUrl: '/assets/projects/loto.jpg',
    imageAlt:
      'Capture du projet Probabilités Loto et EuroMillions avec calculs et blocs de résultats statistiques.',
  },
  {
    slug: 'tetris',
    name: 'Tetrigular',
    tier: 'secondary',
    typeLabel: 'Démonstrateur front',
    tagline:
      'Démonstrateur front temps réel centré sur la boucle de jeu, le rendu Canvas et la réactivité.',
    context:
      'Projet plus démonstratif, centré sur le rendu navigateur, la boucle de jeu et la réactivité de l’interface.',
    keyDecisions: [
      'S’appuyer sur Canvas et une boucle de jeu explicite pour garder la maîtrise du rendu.',
      'Isoler collisions, rotations et score dans des règles relisibles.',
      'Garder un client léger, simple à publier et à reprendre.',
    ],
    qualityAndDelivery: [
      'Code public et démo en ligne pour vérifier le comportement en conditions réelles.',
      'Build front simple et rapide à republier.',
      'Projet volontairement démonstratif pour montrer la structuration d’un comportement interactif.',
    ],
    result:
      'Le projet montre une organisation front claire sur un sujet temps réel, sans complexité superflue.',
    stack: ['TypeScript', 'Canvas', 'Game loop'],
    demoUrl: 'https://tetris.arnaudwissart.fr',
    codeUrl: 'https://github.com/arnaud-wissart-lab/Tetrigular',
    imageUrl: '/assets/projects/tetris.jpg',
    imageAlt:
      'Capture de Tetrigular avec la grille du jeu, les pièces en cours et le panneau de score.',
  },
]
