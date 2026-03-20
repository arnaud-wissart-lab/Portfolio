import { render, screen, within } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../App'
import { projects } from '../data/projects'
import { siteConfig } from '../data/site'

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
      screen.getByRole('link', { name: /voir les projets/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /ce que je prends en charge/i,
      }),
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
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /présentation vidéo/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText(/vidéo de présentation d’arnaud wissart/i),
    ).toHaveAttribute('preload', 'metadata')

    const projectsSection = screen.getByRole('region', {
      name: /études de cas/i,
    })

    expect(
      within(projectsSection).getByRole('heading', {
        level: 2,
        name: /études de cas/i,
      }),
    ).toBeInTheDocument()
    expect(
      within(projectsSection).getByRole('heading', {
        level: 3,
        name: /lecture rapide/i,
      }),
    ).toBeInTheDocument()
    expect(within(projectsSection).getByText('5 projets')).toBeInTheDocument()
    expect(within(projectsSection).getAllByRole('article')).toHaveLength(
      projects.length,
    )

    const interventionsSection = screen.getByRole('region', {
      name: /ce que je prends en charge/i,
    })

    expect(within(interventionsSection).getAllByRole('article')).toHaveLength(
      siteConfig.interventionAreas.length,
    )
  })

  it('affiche le lien Code pour Tetrigular', () => {
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
      within(tetrigularCard).getByRole('link', {
        name: /accéder au code public du projet tetrigular/i,
      }),
    ).toHaveAttribute(
      'href',
      'https://github.com/arnaud-wissart-lab/Tetrigular',
    )

    expect(
      within(tetrigularCard).getByText('Démonstrateur front'),
    ).toBeInTheDocument()
  })

  it('rend explicite l’absence de démo en ligne quand elle n’existe pas', () => {
    render(<App />)

    const nvConsoHeading = screen.getByRole('heading', {
      name: 'NVConso',
    })
    const nvConsoCard = nvConsoHeading.closest('article')

    expect(nvConsoCard).not.toBeNull()
    if (!nvConsoCard) {
      return
    }

    expect(
      within(nvConsoCard).getByText('Sans démo en ligne'),
    ).toBeInTheDocument()
    expect(
      within(nvConsoCard).getByText('Application métier'),
    ).toBeInTheDocument()
  })

  it('rend les badges d’accès cliquables quand une URL existe', () => {
    render(<App />)

    const onigirishopHeading = screen.getByRole('heading', {
      name: 'OnigiriShop',
    })
    const onigirishopCard = onigirishopHeading.closest('article')

    expect(onigirishopCard).not.toBeNull()
    if (!onigirishopCard) {
      return
    }

    expect(
      within(onigirishopCard).getByRole('link', {
        name: /accéder à la démo en ligne du projet onigirishop/i,
      }),
    ).toHaveAttribute('href', 'https://onigirishop.onrender.com/')

    expect(
      within(onigirishopCard).getByRole('link', {
        name: /accéder au code public du projet onigirishop/i,
      }),
    ).toHaveAttribute(
      'href',
      'https://github.com/arnaud-wissart-lab/OnigiriShop',
    )
  })

  it('permet d’ouvrir les captures projet en taille originale', () => {
    render(<App />)

    expect(
      screen.getByRole('link', {
        name: /ouvrir la capture du projet onigirishop/i,
      }),
    ).toHaveAttribute('href', '/assets/projects/onigirishop-desktop.png')

    expect(
      screen.getByRole('link', {
        name: /ouvrir la capture complémentaire du projet onigirishop/i,
      }),
    ).toHaveAttribute('href', '/assets/projects/onigirishop-mobile.png')

    expect(
      screen.getByRole('link', {
        name: /ouvrir la capture du projet tetrigular/i,
      }),
    ).toHaveAttribute('href', '/assets/projects/tetris.jpg')
  })

  it('pointe le lien du code source du portfolio vers arnaud-wissart-lab', () => {
    render(<App />)

    expect(
      screen.getByRole('link', { name: /voir le dépôt du site/i }),
    ).toHaveAttribute('href', 'https://github.com/arnaud-wissart-lab/Portfolio')
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
