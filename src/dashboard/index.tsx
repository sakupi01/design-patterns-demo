import CardWrapper from '@/ui/dashboard/cards'
import Users from '@/ui/dashboard/users'

export default function DashBoard() {
  return (
    <main className="flex flex-col gap-5">
      <CardWrapper />
      <Users />
    </main>
  )
}
