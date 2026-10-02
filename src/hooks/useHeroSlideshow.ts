import { useEffect, useState } from 'react'

const INTERVAL_MS = 6000

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(media.matches)

    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  return reduced
}

export const useHeroSlideshow = (length: number) => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    setIndex((current) => (length === 0 ? 0 : current % length))
  }, [length])

  useEffect(() => {
    if (length <= 1 || paused || reducedMotion) return

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % length)
    }, INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [length, paused, reducedMotion])

  const goTo = (nextIndex: number) => {
    if (length === 0) return
    setIndex(nextIndex)
  }

  const next = () => {
    if (length === 0) return
    setIndex((current) => (current + 1) % length)
  }

  const prev = () => {
    if (length === 0) return
    setIndex((current) => (current - 1 + length) % length)
  }

  return { index, next, prev, goTo, setPaused, reducedMotion }
}
