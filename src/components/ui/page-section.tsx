import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type PageSectionProps = {
  children: ReactNode
  className?: string
  bordered?: boolean
}

export const PageSection = ({
  children,
  className,
  bordered = true,
}: PageSectionProps) => {
  return (
    <section
      className={cn(
        'px-6 py-10 sm:px-8 lg:px-10',
        bordered && 'border-t border-border',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  )
}
