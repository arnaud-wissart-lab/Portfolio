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

  it('laisse le repo Tetris vide tant qu’il est inconnu', () => {
    const tetris = projects.find((project) => project.slug === 'tetris')
    expect(tetris?.codeUrl).toBeUndefined()
  })

  it('place OnigiriShop en troisième position', () => {
    expect(projects[0]?.slug).toBe('bikevoyager')
    expect(projects[1]?.slug).toBe('proba-loto-euromillions')
    expect(projects[2]?.slug).toBe('onigirishop')
  })
})
