import { getBackdropPath } from '@/utils/getPosterPath'
import { cn } from '@/lib/utils'

type HeroBackgroundProps = {
  backdropPath: string
  reducedMotion: boolean
}

export const HeroBackground = ({
  backdropPath,
  reducedMotion,
}: HeroBackgroundProps) => {
  return (
    <img
      key={backdropPath}
      src={getBackdropPath(backdropPath)}
      alt=""
      className={cn(
        'absolute inset-0 size-full object-cover',
        !reducedMotion && 'animate-in fade-in duration-700',
      )}
    />
  )
}
