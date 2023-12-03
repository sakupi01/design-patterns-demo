import StoreLogo from '../ui/store-logo'
import { Link } from 'react-router-dom'
import { Cart } from '../ui/cart'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:overflow-hidden px-6 md:px-12 ">
      <div className="flex justify-between items-center">
        <Link
          className="w-60 m-2 flex items-center justify-start rounded-md bg-purple-600 p-4 mt-4 "
          to="/dashboard"
        >
          <div className="w-60 text-white">
            <StoreLogo />
          </div>
        </Link>
        <Cart />
      </div>
      <div className="flex-grow md:overflow-y-auto ">{children}</div>
    </div>
  )
}
