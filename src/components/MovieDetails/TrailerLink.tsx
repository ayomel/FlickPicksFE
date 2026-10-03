import { LinkButton } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { MovieDetails } from '@/types/movieDetails'
import { resolveTrailerUrl } from '@/utils/formatMovie'

type TrailerLinkProps = {
  movie: MovieDetails
}

const youtubeButtonClassName = cn(
  'rounded-full border-0 px-5 font-semibold shadow-lg w-[200px]',
  'bg-[#ff0000] text-white hover:bg-[#cc0000] hover:text-white',
  'focus-visible:border-[#ff0000] focus-visible:ring-[#ff0000]/40',
  'dark:bg-[#ff0000] dark:hover:bg-[#cc0000]',
)

export const TrailerLink = ({ movie }: TrailerLinkProps) => {
  const trailerUrl = resolveTrailerUrl(movie)
  if (!trailerUrl) return null

  return (
    <LinkButton
      href={trailerUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={youtubeButtonClassName}
    >
      <YoutubeIcon className="size-5" />
      Trailer
    </LinkButton>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M21.8 8.001a2.5 2.5 0 0 0-1.76-1.766C17.88 5.6 12 5.6 12 5.6s-5.88 0-8.04.635A2.5 2.5 0 0 0 2.2 8.001 26.3 26.3 0 0 0 2 12c0 1.334.067 2.667.2 3.999a2.5 2.5 0 0 0 1.76 1.766c2.16.635 8.04.635 8.04.635s5.88 0 8.04-.635a2.5 2.5 0 0 0 1.76-1.766c.133-1.332.2-2.665.2-3.999s-.067-2.667-.2-3.999z"
      />
      <path fill="#ff0000" d="M10 8.75 16 12l-6 3.25z" />
    </svg>
  )
}
