import { useQuery } from '@tanstack/react-query'
import { apiClient } from '../../services/apiClient'
import type { TrendingResponse } from '../types/trending'

export const useTrendingQuery = () => {
  return useQuery({
    queryKey: ['trending'],
    queryFn: async () => {
      const { data } = await apiClient.get<TrendingResponse>('/trending/movies')
      return data
    },
  })
}
