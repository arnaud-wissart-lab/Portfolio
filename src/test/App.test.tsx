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
      screen.getByRole('heading', {
        level: 1,
        name: /développeur \.net \/ web expérimenté/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /voir les réalisations/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /ma méthode de travail/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /compétences structurées par domaine/i,
      }),
    ).toBeInTheDocument()

    const projectsSection = screen.getByRole('region', {
      name: /projets choisis pour montrer le niveau technique/i,
    })

    expect(
      within(projectsSection).getByRole('heading', {
        level: 2,
        name: /projets choisis pour montrer le niveau technique/i,
      }),
    ).toBeInTheDocument()
    expect(
      within(projectsSection).getByRole('heading', {
        level: 3,
        name: /projets majeurs/i,
      }),
    ).toBeInTheDocument()
    expect(within(projectsSection).getAllByRole('article')).toHaveLength(
      projects.length,
    )
  })

  it('n’affiche pas le lien Code pour Tetrigular', () => {
    render(<App />)

    const tetrigularHeading = screen.getByRole('heading', {
      name: 'Tetrigular',
    })
    const tetrigularCard = tetrigularHeading.closest('article')

    expect(tetrigularCard).not.toBeNull()
    if (!tetrigularCard) {
      return
    }

    expect(
      within(tetrigularCard).queryByRole('link', {
        name: /voir le code source/i,
      }),
    ).not.toBeInTheDocument()
  })

  it('masque le bouton CV si /public/cv.pdf est absent', () => {
    render(<App />)

    expect(
      screen.queryByRole('link', { name: /télécharger mon cv/i }),
    ).not.toBeInTheDocument()
  })

  it('affiche un lien de téléchargement quand /public/cv.pdf est disponible', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(null, { status: 200 })),
    )

    render(<App />)

    const cvLink = await screen.findByRole('link', {
      name: /télécharger mon cv/i,
    })

    expect(cvLink).toHaveAttribute('href', '/cv.pdf')
    expect(cvLink).toHaveAttribute('download', 'Arnaud_Wissart_CV_Dev.pdf')
  })

  it('rend la cible du lien d’évitement focalisable', () => {
    render(<App />)

    expect(screen.getByRole('main')).toHaveAttribute('tabindex', '-1')
  })
})
