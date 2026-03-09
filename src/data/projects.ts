export type Project = {
  slug: string
  name: string
  tagline: string
  context: string
  value: string
  stack: string[]
  qualitySignals: string[]
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
    tagline:
      'Boutique en ligne orientée expérience utilisateur et parcours de commande fluide.',
    context:
      'Concevoir une boutique web lisible, avec une séparation nette entre API et interface pour faire évoluer le parcours de commande sans complexifier inutilement le code.',
    value:
      'Le projet met en avant une architecture claire, une gestion des états maîtrisée et une base exploitable pour itérer sur le tunnel de commande.',
    stack: ['ASP.NET Core', 'React', 'Docker'],
    qualitySignals: [
      'Architecture API + interface clairement séparée.',
      'Déploiement continu sur environnement live.',
      'Code source public et démonstration accessible.',
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
    slug: 'bikevoyager',
    name: 'BikeVoyager',
    tagline:
      'Application web orientée consultation rapide, avec interface lisible et socle de données exploitable.',
    context:
      'Structurer une application orientée consultation rapide, tout en gardant un modèle de données capable d’évoluer sans réécriture brutale.',
    value:
      'Le projet démontre une interface claire, un socle SQL exploitable et une organisation pensée pour des itérations progressives.',
    stack: ['ASP.NET Core', 'React', 'SQL'],
    qualitySignals: [
      'Structuration des données pour évolution progressive.',
      'Pipeline CI/CD prêt pour itérations rapides.',
      'Démo publique accompagnée du code source.',
    ],
    demoUrl: 'https://bike.arnaudwissart.fr',
    codeUrl: 'https://github.com/arnaud-wissart-lab/BikeVoyager',
    imageUrl: '/assets/projects/bikevoyager.jpg',
    imageAlt:
      'Capture de BikeVoyager avec une interface web de consultation orientée contenu et navigation claire.',
  },
  {
    slug: 'nvconso',
    name: 'NVConso',
    tagline:
      'Application de suivi de consommation pensée pour l’analyse et l’évolution du modèle de données.',
    context:
      'Poser un socle .NET et SQL orienté analyse pour structurer un suivi de consommation exploitable dans la durée.',
    value:
      'Le projet montre un modèle de données pensé pour l’analyse, une base adaptée à des tableaux de bord métiers et un code préparé pour l’automatisation.',
    stack: ['.NET', 'SQL', 'Docker'],
    qualitySignals: [
      'Modèle de données orienté analyse.',
      'Code prêt pour automatisation de tests.',
      'Projet versionné avec socle Docker.',
    ],
    codeUrl: 'https://github.com/arnaud-wissart-lab/NVConso',
    imageUrl: '/assets/projects/nvconso.jpg',
    imageAlt:
      'Capture de NVConso présentant un écran de suivi de consommation avec menus, données et synthèse visuelle.',
  },
  {
    slug: 'proba-loto-euromillions',
    name: 'Probabilités Loto & EuroMillions',
    tagline:
      'Démonstrateur web pour rendre lisibles des calculs de probabilités et structurer une logique métier explicable.',
    context:
      'Rendre lisibles des calculs statistiques pour un public non spécialiste, avec une interface simple et un code assez propre pour enrichir les scénarios.',
    value:
      'Le projet met en avant une visualisation directe des probabilités clés et une base de code organisée pour étendre la logique métier.',
    stack: ['TypeScript', 'Statistiques', 'UI Web'],
    qualitySignals: [
      'Visualisation directe des probabilités clés.',
      'Code organisé pour enrichissement des scénarios.',
      'Démo publique et code source versionné.',
    ],
    demoUrl: 'https://loto.arnaudwissart.fr',
    codeUrl: 'https://github.com/arnaud-wissart-lab/proba-loto-euromillions',
    imageUrl: '/assets/projects/loto.jpg',
    imageAlt:
      'Capture du projet Probabilités Loto et EuroMillions avec calculs et blocs de résultats statistiques.',
  },
  {
    slug: 'tetris',
    name: 'Tetrigular',
    tagline:
      'Version web du classique Tetris, orientée performance et réactivité.',
    context:
      'Démonstrateur front plus léger, centré sur le rendu navigateur et la réactivité de l’interface.',
    value:
      'Le projet illustre une boucle de jeu claire, la gestion des collisions et un comportement fluide côté client.',
    stack: ['TypeScript', 'Canvas', 'Game loop'],
    qualitySignals: [
      'Boucle de jeu structurée et réactive.',
      'Gestion des collisions et des scores.',
      'Démo publique immédiatement exploitable.',
    ],
    demoUrl: 'https://tetris.arnaudwissart.fr',
    codeUrl: 'https://github.com/arnaud-wissart-lab/Tetrigular',
    imageUrl: '/assets/projects/tetris.jpg',
    imageAlt:
      'Capture de Tetrigular avec la grille du jeu, les pièces en cours et le panneau de score.',
  },
]
