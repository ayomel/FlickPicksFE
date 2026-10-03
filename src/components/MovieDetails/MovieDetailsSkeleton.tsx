import { Skeleton } from '@/components/ui/skeleton'

export const MovieDetailsSkeleton = () => {
  return (
    <div className="min-h-svh bg-black text-white">
      <div className="relative min-h-[80svh] px-6 pb-10 pt-24 sm:px-10 lg:px-16">
        <Skeleton className="absolute inset-0 rounded-none bg-white/10" />
        <div className="relative z-10 flex min-h-[60svh] flex-col justify-end gap-4">
          <Skeleton className="h-4 w-40 bg-white/10" />
          <Skeleton className="h-12 w-full max-w-xl bg-white/10" />
          <Skeleton className="h-6 w-full max-w-md bg-white/10" />
          <Skeleton className="h-8 w-72 bg-white/10" />
        </div>
      </div>
      <div className="space-y-4 px-6 py-10 sm:px-10 lg:px-16">
        <Skeleton className="h-4 w-24 bg-white/10" />
        <Skeleton className="h-20 w-full max-w-3xl bg-white/10" />
      </div>
    </div>
  )
}
