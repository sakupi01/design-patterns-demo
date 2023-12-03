import { useLocalStorage } from '@/dashboard/hooks/useLocalStorage'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  itemId: number
}

export function Button({ className, ...rest }: ButtonProps) {
  const { storedValue, setValue } = useLocalStorage(rest.itemId.toString())
  const { storedValue: total, setValue: setTotal } = useLocalStorage('total')
  return (
    <div className="flex mt-3">
      <button
        {...rest}
        className={clsx(
          'flex h-10 items-center rounded-lg bg-yellow-500 px-4 text-lg font-medium text-white transition-colors hover:bg-purple-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-200 active:bg-purple-300 disabled:bg-zinc-200 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
          className
        )}
        onClick={() => {
          setValue(storedValue - 1)
          setTotal(total - 1)
        }}
        disabled={storedValue === 0}
      >
        -
      </button>
      <div>
        <p className="flex h-10 items-center rounded-lg px-4 text-lg font-medium">
          {storedValue}
        </p>
      </div>
      <button
        {...rest}
        className={clsx(
          'flex h-10 items-center rounded-lg bg-yellow-500 px-4 text-lg font-medium text-white transition-colors hover:bg-pink-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300 active:bg-pink-400 disabled:bg-zinc-200 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
          className
        )}
        onClick={() => {
          setValue(storedValue + 1)
          setTotal(total + 1)
        }}
        disabled={storedValue === 20}
      >
        +
      </button>
    </div>
  )
}
