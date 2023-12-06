import { ListSkeleton } from '@/ui/skeletons'
import clsx from 'clsx'
import { Product } from 'types'

export function ProductListPresenter({
  products,
  isLoading,
  error,
}: {
  products: Product[]
  isLoading: boolean
  error: Error | null
}) {
  if (isLoading) {
    return <ListSkeleton />
  }
  if (error) return <p>Sorry, data could not be fetched.🥲</p>
  if (!products) return <p> No data was found.☹️</p>

  return (
    <main className="flex flex-col gap-5">
      <div className="flex w-full flex-col md:col-span-4 lg:col-span-4">
        <h2 className={`mb-4 text-xl md:text-2xl`}>Product List</h2>
        <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
          <div className="bg-white px-6">
            {products.map((product, i) => {
              return (
                <div
                  key={product.id}
                  className={clsx(
                    'flex flex-row items-center justify-between py-4 overflow-hidden',
                    {
                      'border-t': i !== 0,
                    }
                  )}
                >
                  <div className="flex items-center">
                    <div className="w-[200px] mr-3">
                      <p className="truncate text-sm font-semibold md:text-base">
                        {product.title}
                      </p>
                      <p className="hidden text-sm text-gray-500 sm:block">
                        {product.category}
                      </p>
                    </div>
                  </div>
                  <p className="w-[400px] text-sm text-gray-500 sm:block">
                    {product.description}
                  </p>
                  <p className={`truncate text-sm font-medium md:text-base`}>
                    ${product.price}
                  </p>
                </div>
              )
            })}
          </div>
          <div className="flex items-center pb-2 pt-6">
            📩
            <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
          </div>
        </div>
      </div>
    </main>
  )
}
