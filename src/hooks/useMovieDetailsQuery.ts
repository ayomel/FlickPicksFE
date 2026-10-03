import { useQuery } from '@tanstack/react-query'
import { apiClient } from '../../services/apiClient'
import type { MovieDetails } from '@/types/movieDetails'

export const useMovieDetailsQuery = (id: string | undefined) => {
  return useQuery({
    queryKey: ['movie', id],
    enabled: Boolean(id),
    queryFn: async () => {
      const { data } = await apiClient.get<MovieDetails>(`/movies/${id}`)
      return data
    },
  })
}
