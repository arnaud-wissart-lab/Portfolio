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
    <div className="max-w-4xl space-y-3">
      <p className="section-kicker">
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className="font-display text-3xl font-semibold tracking-tight text-slate sm:text-4xl lg:text-[2.65rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-base leading-relaxed text-slate/82 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
