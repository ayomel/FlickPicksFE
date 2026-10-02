import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type HeroControlsProps = {
  index: number
  count: number
  onPrev: () => void
  onNext: () => void
  onGoTo: (index: number) => void
}

export const HeroControls = ({
  index,
  count,
  onPrev,
  onNext,
  onGoTo,
}: HeroControlsProps) => {
  if (count <= 1) return null

  return (
    <>
      <Button
        size="icon"
        variant="secondary"
        aria-label="Previous movie"
        className="absolute top-1/2 left-3 z-20 -translate-y-1/2 rounded-full sm:left-5"
        onPress={onPrev}
      >
        <ChevronLeft />
      </Button>
      <Button
        size="icon"
        variant="secondary"
        aria-label="Next movie"
        className="absolute top-1/2 right-3 z-20 -translate-y-1/2 rounded-full sm:right-5"
        onPress={onNext}
      >
        <ChevronRight />
      </Button>
      <div className="absolute bottom-8 left-6 z-20 flex flex-wrap gap-2 sm:left-12 lg:left-20">
        {Array.from({ length: count }, (_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            aria-label={`Show movie ${dotIndex + 1}`}
            aria-current={dotIndex === index ? true : undefined}
            className={cn(
              'size-2 rounded-full',
              dotIndex === index ? 'bg-white' : 'bg-white/35 hover:bg-white/60',
            )}
            onClick={() => onGoTo(dotIndex)}
          />
        ))}
      </div>
    </>
  )
}
