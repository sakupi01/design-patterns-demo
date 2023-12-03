import { Product } from 'types'
import { CardWithHover } from '../card'
import { withFetchingState } from '@/libs/withFetchingState'

export default function ProductGalleryWithFetchingState({
  products,
  isLoading,
  error,
}: {
  products: Product[]
  isLoading: boolean
  error: Error | null
}) {
  const ProductGalleryWithFetchingState = withFetchingState<{
    data: Product[]
  }>(ProductGallery)
  return (
    <ProductGalleryWithFetchingState
      isLoading={isLoading}
      error={error}
      whichSkelton="card"
      data={{ data: products }}
    />
  )
}

export function ProductGallery({ data }: { data: Product[] }) {
  return (
    <div className="flex w-full flex-col md:col-span-4 lg:col-span-4">
      <h2 className={`mb-4 text-xl md:text-2xl`}>Product Gallery</h2>
      <div className="grid grid-cols-3 gap-5">
        {data.map((product) => (
          <CardWithHover data={{ data: product }} />
        ))}
      </div>
    </div>
  )
}
