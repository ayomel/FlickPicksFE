import { useQuery } from '@tanstack/react-query'
import { apiClient } from '../../services/apiClient'
import type { SearchResponse } from '../types/search.tsx'

export const useSearchQuery = (query: string) => {
    return useQuery({
        queryKey: ['search', query],
        queryFn: async () => {
            const { data } = await apiClient.get<SearchResponse>('/search/movies', {
                params: {
                    query,
                },
            })
            return data
        },
    })
}
