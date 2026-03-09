import { useState, type SyntheticEvent } from 'react'
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
  if (project.demoUrl && project.codeUrl) {
    return 'Démo publique et code source'
  }

  if (project.demoUrl) {
    return 'Démo publique'
  }

  return 'Code source'
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

  return (
    <div
      className="relative flex h-full flex-col overflow-hidden bg-[linear-gradient(140deg,rgba(240,249,255,0.95)_0%,rgba(248,250,252,0.98)_52%,rgba(236,254,255,0.9)_100%)] p-5 sm:p-6"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,116,144,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.08),transparent_30%)]"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/95 p-3 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.4)]">
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

          {hasSecondaryImage ? (
            <div className="absolute bottom-3 right-3 z-10 w-[24%] min-w-[88px] max-w-[156px] rounded-[1.35rem] border border-white/85 bg-white/95 p-1.5 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.55)] sm:bottom-4 sm:right-4 sm:min-w-[104px] sm:p-2">
              <div className="overflow-hidden rounded-[1rem] border border-slate/10 bg-slate-50 aspect-[9/19]">
                <img
                  src={secondaryImageSrc ?? ''}
                  alt={secondaryImageAlt ?? ''}
                  loading="lazy"
                  decoding="async"
                  onError={onSecondaryImageError}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          ) : null}
        </div>
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
      <div className="grid gap-0 xl:grid-cols-[minmax(320px,0.84fr)_minmax(0,1.16fr)] xl:items-stretch">
        <div className="border-b border-slate/10 xl:h-full xl:border-b-0">
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

        <div className="flex flex-col gap-6 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="pill-accent">
              Projet
            </span>
            <span className="pill-muted">
              {getProjectAvailabilityLabel(project)}
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="font-display text-3xl font-semibold tracking-tight text-slate sm:text-[2rem]">
              {project.name}
            </h3>
            <p className="max-w-3xl text-base leading-relaxed text-slate/88 sm:text-lg">
              {project.tagline}
            </p>
          </div>

          <div className="grid gap-4 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <div className="space-y-4">
              <div className="surface-subtle p-5 sm:p-6">
                <p className="section-kicker">Contexte</p>
                <p className="mt-3 text-sm leading-relaxed text-slate/80">
                  {project.context}
                </p>
              </div>

              <div className="surface-subtle p-5 sm:p-6">
                <p className="section-kicker">Apport</p>
                <p className="mt-3 text-sm leading-relaxed text-slate/80">
                  {project.value}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="surface-subtle p-5 sm:p-6">
                <p className="section-kicker">Stack</p>
                <ul className="tag-list mt-3">
                  {project.stack.map((stackItem) => (
                    <li key={`${project.slug}-${stackItem}`} className="tag-item">
                      {stackItem}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="surface-subtle p-5 sm:p-6">
                <p className="section-kicker">Signaux de sérieux</p>
                <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-slate/85 sm:grid-cols-2 xl:grid-cols-1">
                  {project.qualitySignals.map((qualitySignal) => (
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
            </div>
          </div>

          <ProjectActions project={project} />
        </div>
      </div>
    </article>
  )
}
