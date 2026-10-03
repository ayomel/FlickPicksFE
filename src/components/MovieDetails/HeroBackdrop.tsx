type HeroBackdropProps = {
  backdropUrl: string | null
}

export const HeroBackdrop = ({ backdropUrl }: HeroBackdropProps) => {
  if (!backdropUrl) {
    return <div className="absolute inset-0 bg-neutral-900" aria-hidden />
  }

  return (
    <img
      src={backdropUrl}
      alt=""
      className="absolute inset-0 size-full object-cover"
    />
  )
}
