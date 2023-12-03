import { useProducts } from '@/dashboard/hooks/useProducts'
import { CardsSkeleton, ListSkeleton } from '@/ui/skeletons'
import { Product } from 'types'

export default function ProductRenderer({
  renderItem,
  whichSkelton,
}: {
  renderItem: (products: Product[]) => JSX.Element
  whichSkelton: string
}) {
  const { products, isLoading, error } = useProducts()
  if (isLoading) {
    switch (whichSkelton) {
      case 'card':
        return <CardsSkeleton />
      case 'list':
        return <ListSkeleton />
      default:
        return <ListSkeleton />
    }
  }
  if (error) return <p>Sorry, data could not be fetched.🥲</p>
  if (!products) return <p> No data was found.☹️</p>

  return <main className="flex flex-col gap-5">{renderItem(products)}</main>
}
