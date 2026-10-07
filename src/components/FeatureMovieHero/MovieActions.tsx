import { Info, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { FeaturedMovie } from '@/types/trending'
import { Link } from 'react-router-dom'

type MovieActionsProps = {
  movie: FeaturedMovie
}

export const MovieActions = ({ movie }: MovieActionsProps) => {
  return (
    <div className="flex flex-wrap gap-3 pt-1">
      <Link to={`/movies/${movie.id}`}>
        <Button>
          <Info data-icon="inline-start" />
          View details
        </Button>
      </Link>
      <Button
        variant="secondary"
        onPress={() => {
          console.log('watchlist', movie.id, movie.title)
        }}
      >
        <Plus data-icon="inline-start" />
        Watchlist
      </Button>
    </div>
  )
}
