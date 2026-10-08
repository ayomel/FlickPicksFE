import { Skeleton } from '@/components/ui/skeleton'

export const MovieDetailsSkeleton = () => {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <div className="relative min-h-[80svh] px-6 pb-10 pt-24 sm:px-8 lg:px-10">
        <Skeleton className="absolute inset-0 rounded-none bg-muted" />
        <div className="relative z-10 mx-auto flex min-h-[60svh] max-w-5xl flex-col justify-end gap-4">
          <Skeleton className="h-4 w-32 bg-muted-foreground/20" />
          <Skeleton className="h-12 w-full max-w-xl bg-muted-foreground/20" />
          <Skeleton className="h-6 w-full max-w-md bg-muted-foreground/20" />
          <Skeleton className="h-10 w-48 bg-muted-foreground/20" />
        </div>
      </div>
      <div className="space-y-4 border-t border-border px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl space-y-4">
          <Skeleton className="h-3 w-24 bg-muted-foreground/20" />
          <Skeleton className="h-20 w-full max-w-3xl bg-muted-foreground/20" />
        </div>
      </div>
    </div>
  )
}
