import type { MovieDetails } from '@/types/movieDetails'
import { resolveBackdropUrl } from '@/utils/formatMovie'
import { HeroBackdrop } from './HeroBackdrop'
import { MovieHeroOverlays } from './MovieHeroOverlays'
import { MovieMetadata } from './MovieMetadata'
import { TrailerLink } from './TrailerLink'

type MovieHeroProps = {
  movie: MovieDetails
}

export const MovieHero = ({ movie }: MovieHeroProps) => {
  const backdropUrl = resolveBackdropUrl(movie)

  return (
    <section className="relative min-h-[650px] min-h-[80svh] w-full overflow-hidden bg-black">
      <HeroBackdrop backdropUrl={backdropUrl} />
      <MovieHeroOverlays />
      <div className="relative z-10 flex min-h-[650px] min-h-[80svh] flex-col justify-end px-6 pb-10 pt-24 sm:px-10 lg:px-16">
        <div className="flex w-full max-w-5xl flex-col gap-6">
          <TrailerLink movie={movie} />
          <MovieMetadata movie={movie} />
        </div>
      </div>
    </section>
  )
}
