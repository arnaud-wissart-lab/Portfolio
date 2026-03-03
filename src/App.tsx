import { ProjectCard } from './components/ProjectCard'
import { SectionTitle } from './components/SectionTitle'
import { projects } from './data/projects'
import { siteConfig } from './data/site'
import { usePublicFileExists } from './hooks/usePublicFileExists'

const navigationLinks = [
  { href: '#projects', label: 'Projets' },
  { href: '#stack', label: 'Stack & pratiques' },
  { href: '#about', label: 'À propos' },
  { href: '#contact', label: 'Contact' },
]

function App() {
  const cvIsAvailable = usePublicFileExists('/cv.pdf')
  const socialLinks = siteConfig.socialLinks.filter(
    (socialLink) => socialLink.url.trim().length > 0,
  )

  return (
    <div id="top" className="relative min-h-screen bg-slate-50 text-ink">
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
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10">
          <a
            href="#top"
            className="font-display text-lg font-semibold tracking-tight text-slate"
          >
            Arnaud Wissart
          </a>

          <nav aria-label="Navigation principale">
            <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
              {navigationLinks.map((navigationLink) => (
                <li key={navigationLink.href}>
                  <a
                    href={navigationLink.href}
                    className="inline-flex rounded-md px-3 py-2 text-sm font-medium text-slate/85 transition hover:bg-white hover:text-slate"
                  >
                    {navigationLink.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main
        id="main-content"
        className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-16 pt-12 sm:px-8 lg:px-10"
      >
        <section id="hero" className="animate-fadeUp">
          <p className="mb-4 inline-flex rounded-full border border-accent/25 bg-accentSoft px-4 py-1 text-sm font-semibold text-accent">
            Portfolio / Hub
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-slate sm:text-5xl">
            {siteConfig.fullName}
          </h1>
          <p className="mt-4 max-w-3xl text-xl font-medium text-slate/90 sm:text-2xl">
            {siteConfig.headline}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate/80">
            {siteConfig.valueProposition}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-700"
            >
              Voir les projets
            </a>
            <a
              href="#contact"
              className="inline-flex rounded-md border border-slate/25 bg-white px-5 py-3 text-sm font-semibold text-slate transition hover:border-accent/50 hover:text-accent"
            >
              Contact
            </a>
            {socialLinks.map((socialLink) => (
              <a
                key={socialLink.label}
                href={socialLink.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-md border border-slate/20 bg-white px-4 py-3 text-sm font-medium text-slate/90 transition hover:border-accent/45 hover:text-accent"
              >
                {socialLink.label}
              </a>
            ))}
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-title">
          <SectionTitle
            titleId="projects-title"
            eyebrow="Projets"
            title="Démos live et code source"
            description="Les projets ci-dessous sont pilotés par src/data/projects.ts pour une mise à jour rapide."
          />
          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section id="stack" aria-labelledby="stack-title">
          <SectionTitle
            titleId="stack-title"
            eyebrow="Stack & pratiques"
            title="Socle technique et standards de delivery"
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {siteConfig.stackAndPractices.map((item) => (
              <li
                key={item}
                className="rounded-full border border-slate/20 bg-white px-4 py-2 text-sm font-medium text-slate shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="about" aria-labelledby="about-title">
          <SectionTitle
            titleId="about-title"
            eyebrow="À propos"
            title="Approche concrète, orientée qualité"
          />
          <div className="mt-6 space-y-3 text-base leading-relaxed text-slate/85">
            {siteConfig.aboutLines.map((aboutLine) => (
              <p key={aboutLine}>{aboutLine}</p>
            ))}
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title">
          <SectionTitle
            titleId="contact-title"
            eyebrow="Contact"
            title="Discutons de votre prochain projet"
            description="Je réponds rapidement pour cadrer un besoin, une démo, ou une mission."
          />

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex rounded-md bg-slate px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate/90"
            >
              {siteConfig.email}
            </a>

            {socialLinks.map((socialLink) => (
              <a
                key={`contact-${socialLink.label}`}
                href={socialLink.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-md border border-slate/20 bg-white px-5 py-3 text-sm font-semibold text-slate transition hover:border-accent/45 hover:text-accent"
              >
                {socialLink.label}
              </a>
            ))}

            {cvIsAvailable ? (
              <a
                href="/cv.pdf"
                className="inline-flex rounded-md border border-accent/35 bg-accentSoft px-5 py-3 text-sm font-semibold text-accent transition hover:border-accent hover:bg-cyan-100"
              >
                Télécharger mon CV
              </a>
            ) : null}
          </div>
        </section>
      </main>

      <footer className="border-t border-mist/80 bg-white/70">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-6 text-sm text-slate/75 sm:px-8 lg:px-10">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}. Tous droits
            réservés.
          </p>
          {siteConfig.siteRepoUrl ? (
            <a
              href={siteConfig.siteRepoUrl}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-slate transition hover:text-accent"
            >
              Repo du site
            </a>
          ) : null}
        </div>
      </footer>
    </div>
  )
}

export default App
