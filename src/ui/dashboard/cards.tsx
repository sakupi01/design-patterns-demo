import { useProducts } from '@/dashboard/hooks/useProducts'
import type { Product } from 'types'
import { withFetchingState } from '@/libs/withFetchingState'
import { CardWithHover } from '../card'

export default function CardWrapperWithFetchingState() {
  const { products, isLoading, error } = useProducts()
  const CardWrapperWithFetchingState = withFetchingState<{
    data: Product[]
  }>(CardWrapper)
  return (
    <CardWrapperWithFetchingState
      isLoading={isLoading}
      error={error}
      whichSkelton="card"
      data={{ data: products }}
    />
  )
}
function CardWrapper({ data }: { data: Product[] }) {
  return (
    <div className="flex w-full flex-col md:col-span-4 lg:col-span-4">
      <h2 className={`mb-4 text-xl md:text-2xl`}>Product Gallery</h2>
      <div className="flex gap-4 py-4 overflow-x-auto overflow-y-hidden">
        {data.map((product) => (
          <CardWithHover data={{ data: product }} />
        ))}
      </div>
    </div>
  )
}
