import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export const MovieDetailsError = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 bg-background px-6 pt-16 text-center">
      <p className="m-0 text-sm text-muted-foreground">
        We couldn&apos;t load this movie.
      </p>
      <Link to="/">
        <Button variant="secondary">Back to home</Button>
      </Link>
    </div>
  )
}
