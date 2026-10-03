import { Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { MovieDetails } from '@/types/movieDetails'
import {
  formatRating,
  formatReleaseYear,
  formatRuntime,
} from '@/utils/formatMovie'

type MovieMetadataProps = {
  movie: MovieDetails
}

export const MovieMetadata = ({ movie }: MovieMetadataProps) => {
  const year = formatReleaseYear(movie.release_date)
  const runtime = formatRuntime(movie.runtime)
  const metaParts = [year, runtime].filter(Boolean)

  return (
    <div className="flex flex-col gap-4">
      <h1 className="m-0 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {movie.title}
      </h1>
      {movie.tagline ? (
        <p className="m-0 max-w-2xl text-lg italic text-amber-200/90 sm:text-xl">
          {movie.tagline}
        </p>
      ) : null}
      <div className="flex flex-wrap items-center gap-3">
        <Badge
          variant="outline"
          className="h-7 gap-1 border-amber-400/35 bg-amber-400/10 px-2.5 text-sm text-amber-100"
        >
          <Star className="size-3.5 fill-amber-300 text-amber-300" />
          {formatRating(movie.vote_average)}
        </Badge>
        {metaParts.length > 0 ? (
          <p className="m-0 text-sm text-white/75">
            {metaParts.join('   •   ')}
          </p>
        ) : null}
      </div>
      {movie.genres.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {movie.genres.map((genre) => (
            <Badge
              key={genre.id}
              variant="outline"
              className="border-white/20 bg-white/5 text-white/90"
            >
              {genre.name}
            </Badge>
          ))}
        </div>
      ) : null}
    </div>
  )
}
