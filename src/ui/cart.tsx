import { useLocalStorage } from '@/dashboard/hooks/useLocalStorage'

export function Cart() {
  const { storedValue: total } = useLocalStorage('total')
  return (
    <div className="relative py-2">
      <div className="-top-1 absolute left-5">
        <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
          {total}
        </p>
      </div>
      <div className="text-4xl">🛒</div>
    </div>
  )
}
