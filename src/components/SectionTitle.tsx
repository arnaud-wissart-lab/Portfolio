type SectionTitleProps = {
  eyebrow: string
  title: string
  description?: string
  titleId?: string
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  titleId,
}: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate/80">
          {description}
        </p>
      ) : null}
    </div>
  )
}
