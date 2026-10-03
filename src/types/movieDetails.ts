import type { SearchMovie } from './search'

export type MovieVideo = {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  id: string
  published_at: string
}

export type MovieVideos = {
  results: MovieVideo[]
}

export type WatchProvider = {
  logo_path: string
  provider_id: number
  provider_name: string
  display_priority: number
}

export type StreamingProviders = {
  link?: string
  flatrate?: WatchProvider[]
  rent?: WatchProvider[]
  buy?: WatchProvider[]
}

export type MovieDetails = SearchMovie & {
  trailer?: string | null
  backdrop?: string | null
  poster?: string | null
  videos?: MovieVideos
  streaming_providers?: StreamingProviders
}
