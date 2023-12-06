import { useProducts } from '@/dashboard/hooks/useProducts'
import { ProductListPresenter } from './presenter'

export default function ProductListContainer() {
  const { products, isLoading, error } = useProducts()

  // 👇UI implementation only
  return (
    <ProductListPresenter
      products={products}
      isLoading={isLoading}
      error={error}
    />
  )
}
