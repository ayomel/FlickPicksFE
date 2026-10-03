type MovieOverviewProps = {
  overview: string
}

export const MovieOverview = ({ overview }: MovieOverviewProps) => {
  if (!overview) return null

  return (
    <section className="px-6 py-10 sm:px-10 lg:px-16">
      <h2 className="m-0 mb-4 text-xs font-medium tracking-[0.2em] text-amber-200/90 uppercase">
        Overview
      </h2>
      <p className="m-0 max-w-3xl text-base leading-relaxed text-white/80">
        {overview}
      </p>
    </section>
  )
}
