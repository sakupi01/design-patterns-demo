import { Product } from 'types'
import { Button } from './button'
import { withHover } from '@/libs/withHover'

export const CardWithHover = withHover<{ data: Product }>(Card)

function Card({ data }: { data: Product }) {
  return (
    <div className="flex flex-col justify-between items-center rounded-xl bg-gray-50 p-6 shadow-sm">
      <h3 className="line-clamp-1 text-ellipsis ml-2 text-sm font-medium ">
        {data.title}
      </h3>
      <div className="w-[200px] aspect-[4/3] truncate rounded-xl bg-white p-2 mt-2">
        <img
          src={data.image}
          alt={`${data.title}'s picture`}
          className={`object-contain w-full h-full`}
        />
      </div>
      <Button itemId={data.id} />
    </div>
  )
}
