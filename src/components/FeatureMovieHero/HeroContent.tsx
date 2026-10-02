import type { ReactNode } from 'react'

type HeroContentProps = {
  children: ReactNode
}

export const HeroContent = ({ children }: HeroContentProps) => {
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start gap-5 px-6 pb-24 pt-40 sm:px-12 lg:max-w-2xl lg:px-20">
      {children}
    </div>
  )
}
