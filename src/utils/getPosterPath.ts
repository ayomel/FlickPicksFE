const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/original'

export const getTmdbImagePath = (path: string) => {
  return `${TMDB_IMAGE_BASE}${path}`
}

export const getPosterPath = getTmdbImagePath
export const getBackdropPath = getTmdbImagePath
