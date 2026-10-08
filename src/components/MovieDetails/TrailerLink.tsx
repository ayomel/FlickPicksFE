import { ExternalLink } from 'lucide-react'
import { LinkButton } from '@/components/ui/button'
import type { MovieDetails } from '@/types/movieDetails'
import { resolveTrailerUrl } from '@/utils/formatMovie'

type TrailerLinkProps = {
  movie: MovieDetails
}

export const TrailerLink = ({ movie }: TrailerLinkProps) => {
  const trailerUrl = resolveTrailerUrl(movie)
  if (!trailerUrl) return null

  return (
    <LinkButton
      href={trailerUrl}
      target="_blank"
      rel="noopener noreferrer"
      variant="outline"
      className="w-fit border-border bg-card/80 backdrop-blur-sm hover:bg-muted"
    >
      <ExternalLink data-icon="inline-start" />
      Trailer on YouTube
    </LinkButton>
  )
}
