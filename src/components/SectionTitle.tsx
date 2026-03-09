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
    <div className="max-w-4xl space-y-2.5 sm:space-y-3">
      <p className="section-kicker">{eyebrow}</p>
      <h2
        id={titleId}
        className="font-display text-[1.9rem] font-semibold tracking-tight text-slate sm:text-[2.2rem] lg:text-[2.45rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-[0.98rem] leading-relaxed text-slate/82 sm:text-[1.04rem]">
          {description}
        </p>
      ) : null}
    </div>
  )
}
