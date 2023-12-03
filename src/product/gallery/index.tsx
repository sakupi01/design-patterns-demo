import { ProductGallery } from '@/ui/product-gallery/gallery'
import ProductRenderer from '../product'

export default function ProductGalleryWithRenderProps() {
  return (
    <ProductRenderer
      renderItem={(products) => <ProductGallery data={products} />}
      whichSkelton="card"
    />
  )
}
