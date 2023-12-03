import { useProducts } from '@/dashboard/hooks/useProducts'
import type { Product } from 'types'
import { CardsSkeleton } from '@/ui/skeletons'
import { Button } from '../button'
export default function CardWrapper() {
  const { products, isLoading, error } = useProducts()
  if (isLoading) return <CardsSkeleton />
  if (error) return <div>{error.message}</div>
  return (
    <div className="flex w-full flex-col md:col-span-4 lg:col-span-4">
      <h2 className={`mb-4 text-xl md:text-2xl`}>Product Gallery</h2>
      <div className="flex gap-4 py-4 overflow-x-auto overflow-y-hidden">
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </div>
  )
}

function Card({ product }: { product: Product }) {
  return (
    <div className="flex flex-col justify-between items-center rounded-xl bg-gray-50 p-6 shadow-sm">
      <h3 className="line-clamp-1 text-ellipsis ml-2 text-sm font-medium ">
        {product.title}
      </h3>
      <div className="w-[200px] aspect-[4/3] truncate rounded-xl bg-white p-2 mt-2">
        <img
          src={product.image}
          alt={`${product.title}'s picture`}
          className={`object-contain w-full h-full`}
        />
      </div>
      <Button itemId={product.id} />
    </div>
  )
}
