import { Info, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { FeaturedMovie } from '@/types/trending'
import { Link } from 'react-router-dom'

type MovieActionsProps = {
  movie: FeaturedMovie
}

export const MovieActions = ({ movie }: MovieActionsProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      <Link to={`/movies/${movie.id}`}>
        <Button
          className="rounded-full px-4"
        >
          <Info data-icon="inline-start" />
          More Info
        </Button>
      </Link>
      <Button
        className="rounded-full px-4"
        onPress={() => {
          console.log('watchlist', movie.id, movie.title)
        }}
      >
        <Plus data-icon="inline-start" />
        Want to Watchlist
      </Button>
    </div>
  )
}
