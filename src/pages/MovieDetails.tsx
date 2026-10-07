import { useParams } from 'react-router-dom'
import { useMovieDetailsQuery } from '@/hooks/useMovieDetailsQuery'
import { MovieHero } from '@/components/MovieDetails/MovieHero'
import { MovieOverview } from '@/components/MovieDetails/MovieOverview'
import { WatchProviders } from '@/components/MovieDetails/WatchProviders'
import { MovieDetailsInfo } from '@/components/MovieDetails/MovieDetailsInfo'
import { MovieDetailsSkeleton } from '@/components/MovieDetails/MovieDetailsSkeleton'
import { MovieDetailsError } from '@/components/MovieDetails/MovieDetailsError'

export const MovieDetails = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useMovieDetailsQuery(id)

  if (isLoading) {
    return <MovieDetailsSkeleton />
  }

  if (isError || !data) {
    return <MovieDetailsError />
  }

  return (
    <div className="min-h-svh bg-background text-foreground">
      <MovieHero movie={data} />
      <MovieOverview overview={data.overview} />
      <WatchProviders providers={data.streaming_providers} />
      <MovieDetailsInfo movie={data} />
    </div>
  )
}

export default MovieDetails
