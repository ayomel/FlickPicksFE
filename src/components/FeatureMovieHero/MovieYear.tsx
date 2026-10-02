type MovieYearProps = {
  releaseDate: string
}

export const MovieYear = ({ releaseDate }: MovieYearProps) => {
  const year = releaseDate.slice(0, 4)

  if (!year) return null

  return <p className="m-0 text-sm text-white/70">{year}</p>
}
