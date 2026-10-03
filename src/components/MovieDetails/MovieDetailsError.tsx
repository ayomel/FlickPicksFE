import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export const MovieDetailsError = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 bg-black px-6 text-center text-white">
      <p className="m-0 text-lg text-white/80">
        We couldn&apos;t load this movie.
      </p>
      <Link to="/">
        <Button variant="secondary" className="rounded-full">
          Back to home
        </Button>
      </Link>
    </div>
  )
}
