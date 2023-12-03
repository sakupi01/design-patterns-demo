import CardWrapperWithFetchingState from '@/ui/dashboard/cards'
import UsersWithFetchingState from '@/ui/dashboard/users'

export default function DashBoard() {
  return (
    <main className="flex flex-col gap-5">
      <CardWrapperWithFetchingState />
      <UsersWithFetchingState />
    </main>
  )
}
