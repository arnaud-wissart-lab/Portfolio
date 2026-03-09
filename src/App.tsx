import { ProjectCard } from './components/ProjectCard'
import { SectionTitle } from './components/SectionTitle'
import { projects } from './data/projects'
import { siteConfig } from './data/site'
import { usePublicFileExists } from './hooks/usePublicFileExists'

const navigationLinks = [
  { href: '#interventions', label: 'Interventions' },
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
  const primaryProjects = projects.filter((project) => project.tier === 'primary')
  const secondaryProjects = projects.filter(
    (project) => project.tier === 'secondary',
  )
  const projectsSummaryLabel =
    secondaryProjects.length > 0
      ? `${primaryProjects.length} principaux · ${secondaryProjects.length} complémentaire${secondaryProjects.length > 1 ? 's' : ''}`
      : `${primaryProjects.length} projets`

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
        className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-5 pb-16 pt-8 sm:px-8 sm:pt-10 lg:px-10 lg:gap-16"
      >
        <section id="hero" className="section-shell">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)] lg:items-start lg:gap-7">
            <div className="space-y-5">
              <p className="pill-accent">{siteConfig.heroBadge}</p>

              <div className="space-y-4">
                <h1 className="max-w-4xl font-display text-[2.3rem] font-semibold leading-tight tracking-tight text-slate sm:text-[3rem] lg:text-[3.55rem]">
                  {siteConfig.headline}
                </h1>
                <p className="max-w-3xl text-[1.05rem] font-medium leading-relaxed text-slate/90 sm:text-[1.35rem]">
                  {siteConfig.valueProposition}
                </p>
                <p className="max-w-3xl text-[0.98rem] leading-relaxed text-slate/82 sm:text-[1.02rem]">
                  {siteConfig.heroDescription}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a href="#projects" className="btn-primary w-full sm:w-auto">
                  Voir les projets
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

            <div className="surface-panel p-5 sm:p-6">
              <p className="section-kicker">Situations traitées</p>
              <ul className="mt-4 space-y-3.5">
                {siteConfig.heroFocus.map((focus) => (
                  <li key={focus} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span className="text-sm leading-relaxed text-slate/85">
                      {focus}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="surface-subtle mt-5 px-4 py-4 sm:px-5">
                <p className="text-sm font-semibold text-slate">
                  Résultat attendu
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate/75">
                  Un code relisible, des points de contrôle utiles et une mise
                  en ligne qui ne dépend plus d’opérations fragiles.
                </p>
              </div>
            </div>
          </div>

          <ul className="surface-panel grid gap-2.5 p-4 sm:grid-cols-2 sm:p-5 xl:grid-cols-4">
            {siteConfig.heroProofs.map((proof) => (
              <li
                key={proof}
                className="surface-subtle px-4 py-2.5 text-sm font-medium leading-relaxed text-slate/85"
              >
                {proof}
              </li>
            ))}
          </ul>
        </section>

        <section
          id="interventions"
          aria-labelledby="interventions-title"
          className="section-shell"
        >
          <SectionTitle
            titleId="interventions-title"
            eyebrow="Interventions"
            title="Ce que je prends en charge"
            description="Les sujets sur lesquels j’interviens le plus souvent quand une application doit être reprise, clarifiée ou stabilisée."
          />

          <div className="surface-panel p-4 sm:p-5">
            <div className="grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3">
              {siteConfig.interventionAreas.map((interventionArea) => (
                <article
                  key={interventionArea.title}
                  className="surface-card p-5 sm:p-6"
                >
                  <h3 className="font-display text-xl font-semibold tracking-tight text-slate">
                    {interventionArea.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate/80">
                    {interventionArea.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          aria-labelledby="projects-title"
          className="section-shell"
        >
          <SectionTitle
            titleId="projects-title"
            eyebrow="Projets"
            title="Projets retenus pour montrer les choix techniques et la capacité à livrer"
            description="Les projets principaux détaillent le contexte, les choix structurants, la validation et le résultat. Les projets complémentaires gardent la même logique, avec une lecture plus courte."
          />

          <div className="surface-panel flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-end sm:justify-between sm:px-5">
            <div>
              <h3 className="font-display text-[1.6rem] font-semibold tracking-tight text-slate sm:text-[1.8rem]">
                Études de cas courtes
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate/82">
                Une sélection courte pour montrer du code lisible, des choix
                assumés et des livraisons vérifiables, sans empiler du détail
                inutile.
              </p>
            </div>
            <p className="pill-muted">{projectsSummaryLabel}</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="section-kicker">Projets principaux</p>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate/82">
                    Les cas les plus détaillés pour montrer la structuration du
                    code, les choix techniques et la mise en ligne.
                  </p>
                </div>
                <p className="pill-muted">{primaryProjects.length} projets</p>
              </div>

              <div className="space-y-4">
                {primaryProjects.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    variant="primary"
                  />
                ))}
              </div>
            </div>

            {secondaryProjects.length > 0 ? (
              <div className="space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="section-kicker">Projets complémentaires</p>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate/82">
                      Des projets plus démonstratifs, présentés avec un niveau de
                      détail plus léger pour garder une lecture fluide.
                    </p>
                  </div>
                  <p className="pill-muted">
                    {secondaryProjects.length} projet
                    {secondaryProjects.length > 1 ? 's' : ''}
                  </p>
                </div>

                <div className="grid gap-4 xl:grid-cols-2">
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
            description="Je pars de l’existant, sécurise les changements et laisse un socle clair pour la suite."
          />

          <div className="surface-panel p-4 sm:p-5">
            <ol className="grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3">
              {siteConfig.workMethodSteps.map((workMethodStep, index) => (
                <li
                  key={workMethodStep.title}
                  className="surface-card p-5 sm:p-6"
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
            description="Des capacités organisées par domaine pour montrer comment je reprends, fais évoluer et fiabilise une application."
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
                    className="surface-card p-5 sm:p-6"
                  >
                    <h3
                      id={skillGroupId}
                      className="font-display text-xl font-semibold tracking-tight text-slate"
                    >
                      {skillGroup.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate/78">
                      {skillGroup.description}
                    </p>
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
            title="Échange sur une reprise, une remise au clair technique ou une mise en ligne"
            description="Un échange court suffit pour cadrer un existant, un point de structure ou une livraison à sécuriser."
          />

          <div className="surface-card p-5 sm:p-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="pill-accent">Premier échange</p>
                <p className="mt-4 text-base leading-relaxed text-slate/82">
                  Le plus utile est de partir du périmètre, des points fragiles
                  et de la prochaine échéance.
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
