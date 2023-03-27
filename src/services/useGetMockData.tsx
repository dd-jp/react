/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { request } from './utils'

export const DATA_STALE_TIME = 60000

const formatFilterDataForDisplay = (data: any) => data

export const useGetMockData = (): UseQueryResult<Record<string, any>> => {
  const fetchMockData = async () => {
    return await request({ url: './data/mockData.json' })
  }

  return useQuery(['mockData'], fetchMockData, {
    staleTime: DATA_STALE_TIME,
    select: (data) => formatFilterDataForDisplay(data?.data),
  })
}
