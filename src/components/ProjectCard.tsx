import { useState } from 'react'
import type { Project } from '../data/projects'

const FALLBACK_IMAGE = '/assets/avatar-placeholder.jpg'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imageSrc, setImageSrc] = useState(project.imageUrl || FALLBACK_IMAGE)

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate/15 bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-xl">
      <img
        src={imageSrc}
        alt={`Capture du projet ${project.name}`}
        loading="lazy"
        onError={() => setImageSrc(FALLBACK_IMAGE)}
        className="h-44 w-full object-cover bg-slate-100"
      />

      <div className="flex h-full flex-col p-6">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-slate">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate/80">
          {project.tagline}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((stackItem) => (
            <li
              key={`${project.slug}-${stackItem}`}
              className="rounded-full border border-accent/25 bg-accentSoft px-3 py-1 text-xs font-semibold text-accent"
            >
              {stackItem}
            </li>
          ))}
        </ul>

        <ul className="mt-5 space-y-2 text-sm leading-relaxed text-slate/85">
          {project.highlights.map((highlight) => (
            <li key={`${project.slug}-${highlight}`} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              Démo
            </a>
          ) : null}
          {project.codeUrl ? (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-md border border-slate/20 bg-white px-4 py-2.5 text-sm font-semibold text-slate transition hover:border-accent/45 hover:text-accent"
            >
              Code
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
