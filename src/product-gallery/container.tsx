import { useProducts } from '@/dashboard/hooks/useProducts'
import ProductGalleryWithFetchingState from '@/ui/product-gallery/gallery'

export default function ProductGalleryContainer() {
  const { products, isLoading, error } = useProducts()

  // 👇UI implementation only
  return (
    <main className="flex flex-col gap-5">
      <ProductGalleryWithFetchingState
        products={products}
        isLoading={isLoading}
        error={error}
      />
    </main>
  )
}
