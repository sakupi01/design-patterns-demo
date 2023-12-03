import { Product } from 'types'
import { Button } from './button'

export function Card({ product }: { product: Product }) {
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
