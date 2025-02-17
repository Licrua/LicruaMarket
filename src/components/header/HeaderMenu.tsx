import menuItems from '@/data/header-menu'
import useAuthStore from '@/storage/AuthStateStorage'
import { useOrderStore } from '@/storage/OrderStorage'
import Link from 'next/link'

const HeaderMenu = () => {
  const currentUser = useAuthStore((state) => state.currentUser)
  const orders = useOrderStore((state) => state.orders)
  return (
    <>
      <div>
        <ul className="menu menu-vertical sm:menu-horizontal menu-xs sm:menu-xl  p-1 mr-8 sm:mr-0  sm:menu-md bg-base-200 rounded-box">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.anchor ?? '/'}>
                <img
                  src={item.src}
                  className="w-4 min-w-3 sm:w-5"
                  alt={item.alt}
                />
                {item.alt === 'packageLogo' && currentUser && (
                  <span className="badge badge-sm">{orders.length}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default HeaderMenu
