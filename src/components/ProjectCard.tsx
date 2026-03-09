import { useState, type ReactNode, type SyntheticEvent } from 'react'
import type { Project } from '../data/projects'

const FALLBACK_IMAGE = '/assets/avatar-placeholder.jpg'

type ProjectCardProps = {
  project: Project
}

type ProjectMediaProps = {
  project: Project
  imageSrc: string
  secondaryImageSrc?: string | null
  shouldContainImage: boolean
  onImageLoad: (event: SyntheticEvent<HTMLImageElement>) => void
  onImageError: () => void
  onSecondaryImageError: () => void
}

type ProjectAccessBadgeProps = {
  project: Project
  kind: 'demo' | 'code'
}

type ProjectDetailBlockProps = {
  title: string
  children: ReactNode
}

function ProjectAccessBadge({ project, kind }: ProjectAccessBadgeProps) {
  const href = kind === 'demo' ? project.demoUrl : project.codeUrl
  const label = kind === 'demo' ? 'Démo en ligne' : 'Code public'
  const ariaLabel =
    kind === 'demo'
      ? `Accéder à la démo en ligne du projet ${project.name} (ouvre dans un nouvel onglet)`
      : `Accéder au code public du projet ${project.name} (ouvre dans un nouvel onglet)`

  if (!href) {
    return (
      <span className="pill-muted">
        {kind === 'demo' ? 'Sans démo en ligne' : 'Code non public'}
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className="pill-link"
    >
      {label}
    </a>
  )
}

function ProjectDetailBlock({ title, children }: ProjectDetailBlockProps) {
  return (
    <div className="surface-subtle self-start p-4 sm:p-5">
      <p className="section-kicker">{title}</p>
      <div className="mt-3">{children}</div>
    </div>
  )
}

function ProjectMedia({
  project,
  imageSrc,
  secondaryImageSrc,
  shouldContainImage,
  onImageLoad,
  onImageError,
  onSecondaryImageError,
}: ProjectMediaProps) {
  const imageAlt =
    imageSrc === FALLBACK_IMAGE
      ? `Illustration de remplacement pour le projet ${project.name}`
      : project.imageAlt
  const secondaryImageAlt = project.secondaryImageAlt?.trim()
  const hasSecondaryImage = Boolean(secondaryImageSrc && secondaryImageAlt)
  const primaryImageLinkLabel =
    imageSrc === FALLBACK_IMAGE
      ? `Ouvrir l’illustration du projet ${project.name} dans un nouvel onglet`
      : `Ouvrir la capture du projet ${project.name} dans un nouvel onglet`
  const secondaryImageLinkLabel = secondaryImageAlt
    ? `Ouvrir la capture complémentaire du projet ${project.name} dans un nouvel onglet`
    : ''

  return (
    <div className="p-4 sm:p-5 lg:p-6">
      <div
        className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(140deg,rgba(240,249,255,0.95)_0%,rgba(248,250,252,0.98)_52%,rgba(236,254,255,0.9)_100%)] p-4 sm:p-5"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,116,144,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.08),transparent_30%)]"
          aria-hidden="true"
        />

        {hasSecondaryImage ? (
          <div className="relative flex flex-col items-center justify-center gap-4 sm:gap-5">
            <a
              href={imageSrc}
              target="_blank"
              rel="noreferrer"
              aria-label={primaryImageLinkLabel}
              className="block w-full max-w-[26rem] cursor-zoom-in overflow-hidden rounded-3xl border border-white/80 bg-white/95 p-3 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.4)]"
            >
              <div className="relative overflow-hidden rounded-2xl border border-slate/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(241,245,249,0.92)_100%)] shadow-inner aspect-[16/9]">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  loading="lazy"
                  decoding="async"
                  onLoad={onImageLoad}
                  onError={onImageError}
                  className={`h-full w-full transition duration-500 ${
                    shouldContainImage
                      ? 'object-contain object-center p-2 sm:p-3'
                      : 'object-cover object-top'
                  }`}
                />
              </div>
            </a>

            <a
              href={secondaryImageSrc ?? undefined}
              target="_blank"
              rel="noreferrer"
              aria-label={secondaryImageLinkLabel}
              className="block w-full max-w-[9.5rem] cursor-zoom-in overflow-hidden rounded-[2rem] border border-white/80 bg-white/95 p-2.5 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.4)] sm:max-w-[10rem]"
            >
              <div className="relative overflow-hidden rounded-[1.5rem] border border-slate/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(241,245,249,0.92)_100%)] shadow-inner aspect-[9/19]">
                <img
                  src={secondaryImageSrc ?? ''}
                  alt={secondaryImageAlt ?? ''}
                  loading="lazy"
                  decoding="async"
                  onError={onSecondaryImageError}
                  className="h-full w-full object-contain object-center p-1.5 sm:p-2"
                />
              </div>
            </a>
          </div>
        ) : (
          <div className="relative mx-auto w-full max-w-[26rem] overflow-hidden rounded-3xl border border-white/80 bg-white/95 p-3 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.4)]">
            <div className="relative overflow-hidden rounded-2xl border border-slate/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(241,245,249,0.92)_100%)] shadow-inner aspect-[16/9.2]">
              <a
                href={imageSrc}
                target="_blank"
                rel="noreferrer"
                aria-label={primaryImageLinkLabel}
                className="block h-full w-full cursor-zoom-in"
              >
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  loading="lazy"
                  decoding="async"
                  onLoad={onImageLoad}
                  onError={onImageError}
                  className={`h-full w-full transition duration-500 ${
                    shouldContainImage
                      ? 'object-contain object-center p-2 sm:p-3'
                      : 'object-cover object-top'
                  }`}
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imageSrc, setImageSrc] = useState(project.imageUrl || FALLBACK_IMAGE)
  const [secondaryImageSrc, setSecondaryImageSrc] = useState<string | null>(
    project.secondaryImageUrl ?? null,
  )
  const [shouldContainImage, setShouldContainImage] = useState(false)

  const handleImageLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const ratio =
      event.currentTarget.naturalWidth / event.currentTarget.naturalHeight
    setShouldContainImage(ratio < 0.85)
  }

  const handleImageError = () => {
    setImageSrc(FALLBACK_IMAGE)
    setShouldContainImage(true)
  }

  const handleSecondaryImageError = () => {
    setSecondaryImageSrc(null)
  }

  return (
    <article className="surface-card overflow-hidden">
      <div className="grid gap-0 xl:grid-cols-[minmax(250px,0.62fr)_minmax(0,1.38fr)] xl:items-start">
        <div className="border-b border-slate/10 xl:self-start xl:border-b-0">
          <ProjectMedia
            project={project}
            imageSrc={imageSrc}
            secondaryImageSrc={secondaryImageSrc}
            shouldContainImage={shouldContainImage}
            onImageLoad={handleImageLoad}
            onImageError={handleImageError}
            onSecondaryImageError={handleSecondaryImageError}
          />
        </div>

        <div
          className="flex flex-col gap-4 p-4 sm:p-5 lg:p-6"
        >
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="pill-accent">{project.typeLabel}</span>
            <ProjectAccessBadge project={project} kind="demo" />
            <ProjectAccessBadge project={project} kind="code" />
          </div>

          <div className="space-y-2.5">
            <h3
              className="font-display text-[1.9rem] font-semibold tracking-tight text-slate sm:text-[2.15rem]"
            >
              {project.name}
            </h3>
            <p className="max-w-3xl text-[0.98rem] leading-relaxed text-slate/88 sm:text-[1.02rem]">
              {project.tagline}
            </p>
            <ul className="tag-list pt-1">
              {project.stack.map((stackItem) => (
                <li key={`${project.slug}-${stackItem}`} className="tag-item">
                  {stackItem}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            <div className="grid content-start gap-3">
              <ProjectDetailBlock title="Contexte">
                <p className="text-sm leading-relaxed text-slate/80">
                  {project.context}
                </p>
              </ProjectDetailBlock>

              <ProjectDetailBlock title="Résultat">
                <p className="text-sm leading-relaxed text-slate/80">
                  {project.result}
                </p>
              </ProjectDetailBlock>
            </div>

            <div className="grid content-start gap-3">
              <ProjectDetailBlock title="Décisions clés">
                <ul className="grid gap-2 text-sm leading-relaxed text-slate/85">
                  {project.keyDecisions.map((decision) => (
                    <li key={`${project.slug}-${decision}`} className="detail-item">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </ProjectDetailBlock>

              <ProjectDetailBlock title="Validation et livraison">
                <ul className="grid gap-2 text-sm leading-relaxed text-slate/85">
                  {project.qualityAndDelivery.map((qualitySignal) => (
                    <li
                      key={`${project.slug}-${qualitySignal}`}
                      className="detail-item"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{qualitySignal}</span>
                    </li>
                  ))}
                </ul>
              </ProjectDetailBlock>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
