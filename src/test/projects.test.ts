import { describe, expect, it } from 'vitest'
import { projects } from '../data/projects'

describe('projects data', () => {
  it('contient bien les URLs live fournies', () => {
    const expectedLiveUrls = [
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
    expect(projects[0]?.slug).toBe('onigirishop')
    expect(projects[1]?.slug).toBe('bikevoyager')
    expect(projects[2]?.slug).toBe('nvconso')
  })

  it('présente Tetrigular dans la même sélection que les autres projets', () => {
    expect(projects.map((project) => project.slug)).toContain('tetris')
    expect(projects).toHaveLength(5)
  })

  it('utilise deux captures pour illustrer OnigiriShop', () => {
    const onigirishop = projects.find((project) => project.slug === 'onigirishop')

    expect(onigirishop?.imageUrl).toBe('/assets/projects/onigirishop-desktop.png')
    expect(onigirishop?.secondaryImageUrl).toBe(
      '/assets/projects/onigirishop-mobile.png',
    )
  })

  it('fournit un texte alternatif descriptif pour chaque visuel projet', () => {
    expect(
      projects.every((project) => project.imageAlt.trim().length > 0),
    ).toBe(true)
  })
})
