import { useProducts } from '@/dashboard/hooks/useProducts'
import ProductListWithFetchingState from '@/ui/product-list/list'

export default function ProductListContainer() {
  const { products, isLoading, error } = useProducts()

  // Only UI implementation
  return (
    <main className="flex flex-col gap-5">
      <ProductListWithFetchingState
        products={products}
        isLoading={isLoading}
        error={error}
      />
    </main>
  )
}
