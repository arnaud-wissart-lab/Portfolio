import { render, screen, within } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../App'
import { projects } from '../data/projects'

describe('App', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(null, { status: 404 })),
    )
  })

  it('affiche les sections clés et toutes les cartes projet', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Arnaud Wissart' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /démos live/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(projects.length)
  })

  it('n’affiche pas le lien Code pour Tetris', () => {
    render(<App />)

    const tetrisHeading = screen.getByRole('heading', { name: 'Tetris' })
    const tetrisCard = tetrisHeading.closest('article')

    expect(tetrisCard).not.toBeNull()
    if (!tetrisCard) {
      return
    }

    expect(
      within(tetrisCard).queryByRole('link', { name: 'Code' }),
    ).not.toBeInTheDocument()
  })

  it('masque le bouton CV si /public/cv.pdf est absent', () => {
    render(<App />)

    expect(
      screen.queryByRole('link', { name: /télécharger mon cv/i }),
    ).not.toBeInTheDocument()
  })
})
