import { ProjectCard } from './components/ProjectCard'
import { SectionTitle } from './components/SectionTitle'
import { projects } from './data/projects'
import { siteConfig } from './data/site'
import { usePublicFileExists } from './hooks/usePublicFileExists'

const navigationLinks = [
  { href: '#projects', label: 'Projets' },
  { href: '#method', label: 'Méthode' },
  { href: '#stack', label: 'Compétences' },
  { href: '#contact', label: 'Contact' },
]

const cvDownloadName = 'Arnaud_Wissart_CV_Dev.pdf'

function App() {
  const cvIsAvailable = usePublicFileExists('/cv.pdf')
  const socialLinks = siteConfig.socialLinks.filter(
    (socialLink) => socialLink.url.trim().length > 0,
  )
  const featuredProjects = projects.filter((project) => project.tier === 'featured')
  const secondaryProjects = projects.filter(
    (project) => project.tier === 'secondary',
  )

  return (
    <div
      id="top"
      className="relative min-h-screen overflow-x-clip bg-slate-50 text-ink"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:font-medium focus:text-slate focus:shadow"
      >
        Aller au contenu
      </a>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[460px] bg-[radial-gradient(80%_80%_at_10%_5%,rgba(14,116,144,0.18)_0%,rgba(255,255,255,0)_70%),radial-gradient(55%_60%_at_90%_0%,rgba(14,165,233,0.2)_0%,rgba(255,255,255,0)_70%)]"
        aria-hidden="true"
      />

      <header className="sticky top-0 z-30 border-b border-mist/80 bg-slate-50/95 backdrop-blur-sm">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="#top"
              aria-label="Revenir en haut de la page"
              className="font-display text-lg font-semibold tracking-tight text-slate"
            >
              Arnaud Wissart
            </a>

            <nav
              aria-label="Navigation principale"
              className="-mx-1 overflow-x-auto pb-1 sm:mx-0 sm:pb-0"
            >
              <ul className="flex min-w-max items-center gap-1.5">
                {navigationLinks.map((navigationLink) => (
                  <li key={navigationLink.href}>
                    <a href={navigationLink.href} className="btn-nav">
                      {navigationLink.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 pb-20 pt-10 sm:px-8 sm:pt-12 lg:px-10 lg:gap-20"
      >
        <section id="hero" className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)] lg:items-start lg:gap-8">
            <div className="space-y-6">
              <p className="pill-accent">{siteConfig.heroBadge}</p>

              <div className="space-y-5">
                <h1 className="max-w-4xl font-display text-4xl font-semibold tracking-tight leading-tight text-slate sm:text-5xl lg:text-[3.85rem]">
                  {siteConfig.headline}
                </h1>
                <p className="max-w-3xl text-lg font-medium leading-relaxed text-slate/90 sm:text-2xl">
                  {siteConfig.valueProposition}
                </p>
                <p className="max-w-3xl text-base leading-relaxed text-slate/82 sm:text-lg">
                  {siteConfig.heroDescription}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a href="#projects" className="btn-primary w-full sm:w-auto">
                  Voir les réalisations
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label={`Envoyer un email à ${siteConfig.email}`}
                  className="btn-secondary w-full sm:w-auto"
                >
                  Parler d’une reprise d’existant
                </a>
                {cvIsAvailable ? (
                  <a
                    href="/cv.pdf"
                    download={cvDownloadName}
                    className="btn-soft w-full sm:w-auto"
                  >
                    Télécharger le CV
                  </a>
                ) : null}
              </div>
            </div>

            <div className="surface-panel p-6 sm:p-7">
              <p className="section-kicker">Repères d’intervention</p>
              <ul className="mt-5 space-y-4">
                {siteConfig.heroFocus.map((focus) => (
                  <li key={focus} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span className="text-sm leading-relaxed text-slate/85">
                      {focus}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="surface-subtle mt-6 px-4 py-4 sm:px-5">
                <p className="text-sm font-semibold text-slate">
                  Intervention du cadrage jusqu’à la mise en production
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate/75">
                  Reprise d’existant, clarification d’architecture, qualité
                  logicielle et fiabilisation de la livraison.
                </p>
              </div>
            </div>
          </div>

          <ul className="surface-panel grid gap-3 p-4 sm:grid-cols-2 sm:p-5 xl:grid-cols-4">
            {siteConfig.heroProofs.map((proof) => (
              <li
                key={proof}
                className="surface-subtle px-4 py-3 text-sm font-medium leading-relaxed text-slate/85"
              >
                {proof}
              </li>
            ))}
          </ul>
        </section>

        <section
          id="projects"
          aria-labelledby="projects-title"
          className="section-shell"
        >
          <SectionTitle
            titleId="projects-title"
            eyebrow="Projets"
            title="Projets choisis pour montrer le niveau technique et la qualité de livraison"
            description="Chaque projet expose l’objectif, l’apport, la stack et les signaux de sérieux visibles dans le code, la mise en ligne ou l’organisation technique."
          />

          <div className="space-y-10">
            <div>
              <div className="surface-panel flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-slate">
                    Projets majeurs
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate/82">
                    Les projets les plus représentatifs d’un travail .NET / web
                    structuré, maintenable et publiable.
                  </p>
                </div>
                <p className="pill-muted">
                  {featuredProjects.length} projets retenus
                </p>
              </div>

              <div className="mt-6 space-y-6">
                {featuredProjects.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    variant="featured"
                  />
                ))}
              </div>
            </div>

            {secondaryProjects.length > 0 ? (
              <div>
                <div className="surface-panel flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6">
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-slate">
                      Projets complémentaires
                    </h3>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate/82">
                      {secondaryProjects.length > 1
                        ? 'Des projets plus légers, utiles pour montrer la maîtrise d’un périmètre ciblé côté navigateur.'
                        : 'Un projet plus léger, utile pour montrer une maîtrise ciblée côté navigateur.'}
                    </p>
                  </div>
                  <p className="pill-muted">
                    {secondaryProjects.length}{' '}
                    {secondaryProjects.length > 1
                      ? 'projets complémentaires'
                      : 'projet complémentaire'}
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-5">
                  {secondaryProjects.map((project) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      variant="secondary"
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <section
          id="method"
          aria-labelledby="method-title"
          className="section-shell"
        >
          <SectionTitle
            titleId="method-title"
            eyebrow="Méthode"
            title="Ma méthode de travail"
            description="Je clarifie le besoin, sécurise l’existant et laisse une base exploitable pour la suite."
          />

          <div className="surface-panel p-4 sm:p-5">
            <ol className="grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3">
              {siteConfig.workMethodSteps.map((workMethodStep, index) => (
                <li
                  key={workMethodStep.title}
                  className="surface-card p-6 sm:p-7"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/20 bg-accentSoft text-sm font-semibold text-accent">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-slate">
                    {workMethodStep.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate/80">
                    {workMethodStep.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="stack"
          aria-labelledby="stack-title"
          className="section-shell"
        >
          <SectionTitle
            titleId="stack-title"
            eyebrow="Compétences"
            title="Compétences structurées par domaine"
            description="Des compétences organisées par domaine pour montrer ce que je peux cadrer, construire, sécuriser et industrialiser."
          />

          <div className="surface-panel p-4 sm:p-5">
            <div className="grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3">
              {siteConfig.skillGroups.map((skillGroup) => {
                const skillGroupId = `skill-group-${skillGroup.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')}`

                return (
                  <section
                    key={skillGroup.title}
                    aria-labelledby={skillGroupId}
                    className="surface-card p-6 sm:p-7"
                  >
                    <h3
                      id={skillGroupId}
                      className="font-display text-xl font-semibold tracking-tight text-slate"
                    >
                      {skillGroup.title}
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate/82">
                      {skillGroup.items.map((item) => (
                        <li
                          key={`${skillGroup.title}-${item}`}
                          className="flex gap-3"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )
              })}
            </div>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-title"
          className="section-shell"
        >
          <SectionTitle
            titleId="contact-title"
            eyebrow="Contact"
            title="Parlons reprise d’existant, architecture ou mise en production"
            description="Un échange rapide pour cadrer une reprise d’existant, une architecture à clarifier ou une chaîne de livraison à fiabiliser."
          />

          <div className="surface-card p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="pill-accent">Échange ciblé</p>
                <p className="mt-4 text-base leading-relaxed text-slate/82">
                  Le plus utile est de partir du périmètre, des risques actuels
                  et de la prochaine livraison à sécuriser.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label={`Envoyer un email à ${siteConfig.email}`}
                  className="btn-primary w-full bg-slate hover:bg-slate/90 sm:w-auto"
                >
                  {siteConfig.email}
                </a>

                {cvIsAvailable ? (
                  <a
                    href="/cv.pdf"
                    download={cvDownloadName}
                    className="btn-soft w-full sm:w-auto"
                  >
                    Télécharger mon CV
                  </a>
                ) : null}

                {socialLinks.map((socialLink) => (
                  <a
                    key={`contact-${socialLink.label}`}
                    href={socialLink.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${socialLink.label} (ouvre dans un nouvel onglet)`}
                    className="btn-secondary w-full sm:w-auto"
                  >
                    {socialLink.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-mist/80 bg-white/75">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-6 text-sm text-slate/75 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}. Tous droits
            réservés.
          </p>
          {siteConfig.siteRepoUrl ? (
            <a
              href={siteConfig.siteRepoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Voir le dépôt du site (ouvre dans un nouvel onglet)"
              className="font-medium text-slate transition hover:text-accent"
            >
              Code source du portfolio
            </a>
          ) : null}
        </div>
      </footer>
    </div>
  )
}

export default App
