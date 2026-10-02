import { Info, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { FeaturedMovie } from '@/types/trending'

type MovieActionsProps = {
  movie: FeaturedMovie
}

export const MovieActions = ({ movie }: MovieActionsProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        className="rounded-full px-4"
        onPress={() => {
          console.log('more-info', movie.id, movie.title)
        }}
      >
        <Info data-icon="inline-start" />
        More Info
      </Button>
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
