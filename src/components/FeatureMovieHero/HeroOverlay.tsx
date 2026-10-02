export const HeroOverlay = () => {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/25 to-black/40" />
    </div>
  )
}
