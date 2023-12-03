import { ProductList } from '@/ui/product-list/list'
import ProductRenderer from '../product'

export default function ProductListWithRenderProps() {
  return (
    <ProductRenderer
      renderItem={(products) => <ProductList data={products} />}
      whichSkelton="list"
    />
  )
}
