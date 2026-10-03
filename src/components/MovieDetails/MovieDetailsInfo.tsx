import type { MovieDetails } from '@/types/movieDetails'
import {
  formatReleaseDate,
  formatRuntime,
  getPrimaryLanguage,
  getStudioNames,
} from '@/utils/formatMovie'

type DetailItemProps = {
  label: string
  value: string | null
}

const DetailItem = ({ label, value }: DetailItemProps) => {
  if (!value) return null

  return (
    <div className="flex flex-col gap-1.5">
      <dt className="text-xs font-medium tracking-[0.15em] text-white/45 uppercase">
        {label}
      </dt>
      <dd className="m-0 text-sm text-white/85">{value}</dd>
    </div>
  )
}

type MovieDetailsInfoProps = {
  movie: MovieDetails
}

export const MovieDetailsInfo = ({ movie }: MovieDetailsInfoProps) => {
  return (
    <section className="border-t border-white/10 px-6 py-10 sm:px-10 lg:px-16">
      <h2 className="m-0 mb-6 text-xs font-medium tracking-[0.2em] text-amber-200/90 uppercase">
        Details
      </h2>
      <dl className="m-0 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DetailItem
          label="Release date"
          value={formatReleaseDate(movie.release_date)}
        />
        <DetailItem label="Runtime" value={formatRuntime(movie.runtime)} />
        <DetailItem label="Status" value={movie.status || null} />
        <DetailItem label="Language" value={getPrimaryLanguage(movie)} />
        <DetailItem label="Studios" value={getStudioNames(movie)} />
      </dl>
    </section>
  )
}
