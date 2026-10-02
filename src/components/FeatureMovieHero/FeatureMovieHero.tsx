import { useTrendingQuery } from '@/hooks/useTrendingQuery'
import { useHeroSlideshow } from '@/hooks/useHeroSlideshow'
import { hasBackdrop } from '@/types/trending'
import { HeroBackground } from './HeroBackground'
import { HeroOverlay } from './HeroOverlay'
import { HeroContent } from './HeroContent'
import { MovieYear } from './MovieYear'
import { MovieTitle } from './MovieTitle'
import { MovieDescription } from './MovieDescription'
import { MovieActions } from './MovieActions'
import { HeroControls } from './HeroControls'

const HeroFrame = ({ children }: { children: string }) => {
  return (
    <section className="flex min-h-svh items-end bg-black px-6 pb-16 text-sm text-white/70 sm:px-12 lg:px-20">
      <p className="m-0">{children}</p>
    </section>
  )
}

export const FeatureMovieHero = () => {
  const { data, isLoading, isError } = useTrendingQuery()
  const movies = data?.results.filter(hasBackdrop) ?? []
  const { index, next, prev, goTo, setPaused, reducedMotion } =
    useHeroSlideshow(movies.length)
  const movie = movies[index]

  if (isLoading) {
    return <HeroFrame>Loading trending movies</HeroFrame>
  }

  if (isError) {
    return <HeroFrame>Couldn't load trending movies</HeroFrame>
  }

  if (!movie) {
    return <HeroFrame>No trending movies right now</HeroFrame>
  }

  return (
    <section
      className="relative min-h-svh overflow-hidden bg-black text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        const nextFocus = event.relatedTarget
        if (!(nextFocus instanceof Node) || !event.currentTarget.contains(nextFocus)) {
          setPaused(false)
        }
      }}
    >
      <HeroBackground
        backdropPath={movie.backdrop_path}
        reducedMotion={reducedMotion}
      />
      <HeroOverlay />
      <HeroContent>
        <MovieYear releaseDate={movie.release_date} />
        <MovieTitle title={movie.title} />
        <MovieDescription overview={movie.overview} />
        <MovieActions movie={movie} />
      </HeroContent>
      <HeroControls
        index={index}
        count={movies.length}
        onPrev={prev}
        onNext={next}
        onGoTo={goTo}
      />
    </section>
  )
}

export default FeatureMovieHero
