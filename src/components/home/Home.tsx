/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useGetMockData } from '@site/src/services'

export default function Home(): JSX.Element {
  const { data, isLoading } = useGetMockData()

  return isLoading ? (
    <div>Loading data ...</div>
  ) : (
    <>
      {data?.map((item: Record<string, string | number>) => (
        <div key={`data-${item.name}`} style={{ display: 'flex', gap: '1rem' }}>
          <span>{item.name}</span>
          <span>{item.age}</span>
          <span>{item.balance}</span>
        </div>
      ))}
    </>
  )
}
