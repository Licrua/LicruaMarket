import menuItems from '@/data/header-menu'
import { useOrderStore } from '@/storage/OrderStorage'

const HeaderMenu = () => {
  const orders = useOrderStore((state) => state.orders)
  return (
    <>
      <div>
        <ul className="menu menu-vertical sm:menu-horizontal menu-xs sm:menu-xl  p-1 mr-8 sm:mr-0  sm:menu-md bg-base-200 rounded-box">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.anchor}>
                <img
                  src={item.src}
                  className="w-4 min-w-3 sm:w-5"
                  alt={item.alt}
                />
                {item.alt === 'packageLogo' && (
                  <span className="badge badge-sm">{orders.length}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default HeaderMenu
