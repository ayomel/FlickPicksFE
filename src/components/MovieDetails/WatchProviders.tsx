import type { StreamingProviders, WatchProvider } from '@/types/movieDetails'
import { getProviderLogoUrl } from '@/utils/formatMovie'

type WatchProvidersProps = {
  providers?: StreamingProviders
}

const ProviderGroup = ({
  label,
  items,
}: {
  label: string
  items: WatchProvider[]
}) => {
  if (!items.length) return null

  return (
    <div className="flex flex-col gap-3">
      <h3 className="m-0 text-xs font-medium tracking-[0.15em] text-white/45 uppercase">
        {label}
      </h3>
      <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
        {items.map((provider) => (
          <li key={`${label}-${provider.provider_id}`}>
            <div
              className="flex size-12 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/5 p-1.5"
              title={provider.provider_name}
            >
              <img
                src={getProviderLogoUrl(provider.logo_path)}
                alt={provider.provider_name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const WatchProviders = ({ providers }: WatchProvidersProps) => {
  const stream = providers?.flatrate ?? []
  const rent = providers?.rent ?? []
  const buy = providers?.buy ?? []
  const hasAny = stream.length + rent.length + buy.length > 0

  if (!hasAny) {
    return (
      <section className="border-t border-white/10 px-6 py-10 sm:px-10 lg:px-16">
        <h2 className="m-0 mb-4 text-xs font-medium tracking-[0.2em] text-amber-200/90 uppercase">
          Where to watch
        </h2>
        <p className="m-0 text-sm text-white/50">
          Streaming availability is currently unavailable.
        </p>
      </section>
    )
  }

  return (
    <section className="border-t border-white/10 px-6 py-10 sm:px-10 lg:px-16">
      <h2 className="m-0 mb-6 text-xs font-medium tracking-[0.2em] text-amber-200/90 uppercase">
        Where to watch
      </h2>
      <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:gap-12">
        <ProviderGroup label="Stream" items={stream} />
        <ProviderGroup label="Rent" items={rent} />
        <ProviderGroup label="Buy" items={buy} />
      </div>
    </section>
  )
}
