export const MovieHeroOverlays = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1]">
      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/45 to-black/15" />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/35 to-black/25" />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  )
}
