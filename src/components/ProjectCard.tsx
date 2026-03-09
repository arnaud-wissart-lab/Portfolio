import { useState, type SyntheticEvent } from 'react'
import type { Project } from '../data/projects'

const FALLBACK_IMAGE = '/assets/avatar-placeholder.jpg'

type ProjectCardProps = {
  project: Project
  variant?: 'primary' | 'secondary'
}

type ProjectMediaProps = {
  project: Project
  imageSrc: string
  secondaryImageSrc?: string | null
  shouldContainImage: boolean
  compact?: boolean
  onImageLoad: (event: SyntheticEvent<HTMLImageElement>) => void
  onImageError: () => void
  onSecondaryImageError: () => void
}

type ProjectActionsProps = {
  project: Project
  compact?: boolean
}

function ProjectActions({
  project,
  compact = false,
}: ProjectActionsProps) {
  const sizeClass = compact ? 'px-4 py-2.5' : 'px-5 py-3'

  return (
    <div className="flex flex-wrap gap-3">
      {project.demoUrl ? (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Voir la démo du projet ${project.name} (ouvre dans un nouvel onglet)`}
          className={`btn-primary ${sizeClass}`}
        >
          Voir la démo
        </a>
      ) : null}
      {project.codeUrl ? (
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Voir le code source du projet ${project.name} (ouvre dans un nouvel onglet)`}
          className={`btn-secondary ${sizeClass}`}
        >
          Voir le code source
        </a>
      ) : null}
    </div>
  )
}

function getProjectAvailabilityLabel(project: Project): string {
  return project.demoUrl ? 'Démo en ligne' : 'Sans démo en ligne'
}

function getProjectSourceLabel(project: Project): string {
  return project.codeUrl ? 'Code public' : 'Code non public'
}

function ProjectMedia({
  project,
  imageSrc,
  secondaryImageSrc,
  shouldContainImage,
  compact = false,
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
    <div
      className={`relative flex h-full flex-col justify-center overflow-hidden bg-[linear-gradient(140deg,rgba(240,249,255,0.95)_0%,rgba(248,250,252,0.98)_52%,rgba(236,254,255,0.9)_100%)] ${
        compact ? 'p-4 sm:p-5' : 'p-4 sm:p-6'
      }`}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,116,144,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.08),transparent_30%)]"
        aria-hidden="true"
      />

      {hasSecondaryImage ? (
        <div className="relative flex h-full flex-col items-center justify-center gap-4 sm:gap-5">
          <a
            href={imageSrc}
            target="_blank"
            rel="noreferrer"
            aria-label={primaryImageLinkLabel}
            className="block w-full max-w-[30rem] cursor-zoom-in overflow-hidden rounded-3xl border border-white/80 bg-white/95 p-3 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.4)]"
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
            className="block w-full max-w-[10.5rem] cursor-zoom-in overflow-hidden rounded-[2rem] border border-white/80 bg-white/95 p-2.5 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.4)] sm:max-w-[11.5rem]"
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
        <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/95 p-3 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.4)]">
          <div className={`relative overflow-hidden rounded-2xl border border-slate/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(241,245,249,0.92)_100%)] shadow-inner ${
            compact ? 'aspect-[16/8.4]' : 'aspect-[16/9]'
          }`}>
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
  )
}

export function ProjectCard({
  project,
  variant = 'primary',
}: ProjectCardProps) {
  const [imageSrc, setImageSrc] = useState(project.imageUrl || FALLBACK_IMAGE)
  const [secondaryImageSrc, setSecondaryImageSrc] = useState<string | null>(
    project.secondaryImageUrl ?? null,
  )
  const [shouldContainImage, setShouldContainImage] = useState(false)
  const compact = variant === 'secondary'
  const visibleKeyDecisions = compact
    ? project.keyDecisions.slice(0, 2)
    : project.keyDecisions
  const visibleQualityAndDelivery = compact
    ? project.qualityAndDelivery.slice(0, 2)
    : project.qualityAndDelivery

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
      <div
        className={`grid gap-0 ${
          compact
            ? 'lg:grid-cols-[minmax(240px,0.74fr)_minmax(0,1.26fr)] lg:items-stretch'
            : 'lg:grid-cols-[minmax(300px,0.84fr)_minmax(0,1.16fr)] lg:items-stretch'
        }`}
      >
        <div className="border-b border-slate/10 lg:h-full lg:border-b-0">
          <ProjectMedia
            project={project}
            imageSrc={imageSrc}
            secondaryImageSrc={secondaryImageSrc}
            shouldContainImage={shouldContainImage}
            compact={compact}
            onImageLoad={handleImageLoad}
            onImageError={handleImageError}
            onSecondaryImageError={handleSecondaryImageError}
          />
        </div>

        <div className={`flex flex-col ${compact ? 'gap-4 p-5 sm:p-6' : 'gap-5 p-5 sm:p-7'}`}>
          <div className={`flex flex-wrap items-center ${compact ? 'gap-2.5' : 'gap-3'}`}>
            <span className="pill-accent">{project.typeLabel}</span>
            <span className="pill-muted">{getProjectAvailabilityLabel(project)}</span>
            <span className="pill-muted">{getProjectSourceLabel(project)}</span>
          </div>

          <div className={compact ? 'space-y-2.5' : 'space-y-3'}>
            <h3
              className={`font-display font-semibold tracking-tight text-slate ${
                compact ? 'text-2xl sm:text-[1.75rem]' : 'text-[1.85rem] sm:text-[2rem]'
              }`}
            >
              {project.name}
            </h3>
            <p
              className={`max-w-3xl leading-relaxed text-slate/88 ${
                compact ? 'text-[0.96rem]' : 'text-base sm:text-lg'
              }`}
            >
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

          <div className={`grid ${compact ? 'gap-3 md:grid-cols-2' : 'gap-4 lg:grid-cols-2'}`}>
            <div className="surface-subtle p-4 sm:p-5">
              <p className="section-kicker">Contexte</p>
              <p className="mt-3 text-sm leading-relaxed text-slate/80">
                {project.context}
              </p>
            </div>

            <div className="surface-subtle p-4 sm:p-5">
              <p className="section-kicker">Décisions clés</p>
              <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-slate/85">
                {visibleKeyDecisions.map((decision) => (
                  <li key={`${project.slug}-${decision}`} className="detail-item">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-subtle p-4 sm:p-5">
              <p className="section-kicker">Validation et livraison</p>
              <ul
                className={`mt-3 grid gap-2 text-sm leading-relaxed text-slate/85 ${
                  compact ? '' : 'sm:grid-cols-2 lg:grid-cols-1'
                }`}
              >
                {visibleQualityAndDelivery.map((qualitySignal) => (
                  <li
                    key={`${project.slug}-${qualitySignal}`}
                    className="detail-item"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{qualitySignal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-subtle p-4 sm:p-5">
              <p className="section-kicker">Résultat</p>
              <p className="mt-3 text-sm leading-relaxed text-slate/80">
                {project.result}
              </p>
            </div>
          </div>

          <ProjectActions project={project} compact={compact} />
        </div>
      </div>
    </article>
  )
}
