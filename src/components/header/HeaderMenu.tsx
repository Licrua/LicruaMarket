import menuItems from '@/data/header-menu'

const HeaderMenu = () => (
  <>
    <div>
      <ul className="menu menu-vertical sm:menu-horizontal menu-xs sm:menu-xl  p-1 mr-8 sm:mr-0  sm:menu-md bg-base-200 rounded-box">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href="">
              <img
                src={item.src}
                className="w-4 min-w-3 sm:w-5"
                alt={item.alt}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
    {/*  mobile */}
    {/* <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        Click
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content glass menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div> */}
  </>
)

export default HeaderMenu
