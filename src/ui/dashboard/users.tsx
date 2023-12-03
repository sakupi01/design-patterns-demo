import clsx from 'clsx'
import { useUsers } from '@/dashboard/hooks/useUsers'
import { UsersSkeleton } from '@/ui/skeletons'
export default function Users() {
  const { users, isLoading, error } = useUsers()
  if (isLoading) {
    return <UsersSkeleton />
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }
  return (
    <div className="flex w-full flex-col md:col-span-4 lg:col-span-4">
      <h2 className={`mb-4 text-xl md:text-2xl`}>Users</h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {users.map((user, i) => {
            return (
              <div
                key={user.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4 overflow-hidden',
                  {
                    'border-t': i !== 0,
                  }
                )}
              >
                <div className="flex items-center">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {user.name.firstname} {user.name.lastname}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {user.email}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 sm:block">
                  {user.address.street} {user.address.city}{' '}
                  {user.address.zipcode}
                </p>
                <p className={`truncate text-sm font-medium md:text-base`}>
                  {user.phone}
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
  )
}
