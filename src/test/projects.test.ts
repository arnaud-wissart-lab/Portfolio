import { describe, expect, it } from 'vitest'
import { projects } from '../data/projects'

describe('projects data', () => {
  it('contient bien les URLs live fournies', () => {
    const expectedLiveUrls = [
      'https://blazor.arnaudwissart.fr/',
      'https://onigirishop.onrender.com/',
      'https://bike.arnaudwissart.fr',
      'https://loto.arnaudwissart.fr',
      'https://tetris.arnaudwissart.fr',
    ]

    const liveUrls = projects
      .map((project) => project.demoUrl)
      .filter((demoUrl): demoUrl is string => Boolean(demoUrl))

    expect(liveUrls).toEqual(expect.arrayContaining(expectedLiveUrls))
  })

  it('renseigne le dépôt de Tetrigular', () => {
    const tetris = projects.find((project) => project.slug === 'tetris')
    expect(tetris?.codeUrl).toBe(
      'https://github.com/arnaud-wissart-lab/Tetrigular',
    )
  })

  it('pointe les dépôts projet vers le compte arnaud-wissart-lab', () => {
    const projectRepoUrls = projects
      .map((project) => project.codeUrl)
      .filter((codeUrl): codeUrl is string => Boolean(codeUrl))

    expect(
      projectRepoUrls.every((codeUrl) =>
        codeUrl.startsWith('https://github.com/arnaud-wissart-lab/'),
      ),
    ).toBe(true)
  })

  it('remonte les projets .NET / web les plus crédibles en tête de liste', () => {
    expect(projects[0]?.slug).toBe('blazor-enterprise-starter')
    expect(projects[1]?.slug).toBe('onigirishop')
    expect(projects[2]?.slug).toBe('bikevoyager')
  })

  it('renseigne la démo et le dépôt de BlazorEnterpriseStarter', () => {
    const starter = projects.find(
      (project) => project.slug === 'blazor-enterprise-starter',
    )

    expect(starter?.demoUrl).toBe('https://blazor.arnaudwissart.fr/')
    expect(starter?.codeUrl).toBe(
      'https://github.com/arnaud-wissart-lab/blazor-enterprise-starter',
    )
  })

  it('conserve une sélection unique de six projets', () => {
    expect(projects).toHaveLength(6)
    expect(projects.map((project) => project.slug)).toEqual([
      'blazor-enterprise-starter',
      'onigirishop',
      'bikevoyager',
      'nvconso',
      'proba-loto-euromillions',
      'tetris',
    ])
  })

  it('décrit chaque projet comme une mini étude de cas lisible', () => {
    expect(
      projects.every(
        (project) =>
          project.typeLabel.trim().length > 0 &&
          project.keyDecisions.length >= 2 &&
          project.qualityAndDelivery.length >= 2 &&
          project.result.trim().length > 0,
      ),
    ).toBe(true)
  })

  it('utilise deux captures pour illustrer OnigiriShop', () => {
    const onigirishop = projects.find(
      (project) => project.slug === 'onigirishop',
    )

    expect(onigirishop?.imageUrl).toBe(
      '/assets/projects/onigirishop-desktop.png',
    )
    expect(onigirishop?.secondaryImageUrl).toBe(
      '/assets/projects/onigirishop-mobile.png',
    )
  })

  it('ajoute deux captures cohérentes pour BlazorEnterpriseStarter', () => {
    const starter = projects.find(
      (project) => project.slug === 'blazor-enterprise-starter',
    )

    expect(starter?.imageUrl).toBe(
      '/assets/projects/blazor-enterprise-starter-home.png',
    )
    expect(starter?.secondaryImageUrl).toBe(
      '/assets/projects/blazor-enterprise-starter-backlog.png',
    )
  })

  it('fournit un texte alternatif descriptif pour chaque visuel projet', () => {
    expect(
      projects.every((project) => project.imageAlt.trim().length > 0),
    ).toBe(true)
  })

  it('rend visibles les projets plus démonstratifs sans les sortir de la sélection', () => {
    const demonstrativeProjects = projects.filter((project) =>
      project.typeLabel.includes('Démonstrateur'),
    )

    expect(demonstrativeProjects.map((project) => project.slug)).toEqual(
      expect.arrayContaining(['proba-loto-euromillions', 'tetris']),
    )
  })
})
