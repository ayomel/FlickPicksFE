import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export const AppHeader = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'flex h-16 items-center border-b border-border/80 px-6 sm:px-8',
          'bg-background/92 backdrop-blur-md',
        )}
      >
        <Link
          to="/"
          className={cn(
            'inline-flex items-baseline gap-0.5 text-sm font-semibold tracking-tight outline-none',
            'transition-opacity hover:opacity-90',
            'focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          )}
        >
          <span className="text-foreground">Flick</span>
          <span className="font-display text-base text-brand">Pick</span>
        </Link>
      </div>
    </header>
  )
}
