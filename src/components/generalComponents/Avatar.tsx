import Link from 'next/link'

const Avatar = () => (
  <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10  rounded-full">
        <img alt="User Avatar" src="/avatar.avif" />
      </div>
    </div>
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
    >
      <li>
        <Link href={'/'} className="justify-between">
          Профиль <span className="badge">Новинка</span>
        </Link>
      </li>
      <li>
        <Link href={'/'}>Настройки</Link>
      </li>
      <li>
        <Link href={'/signIn'}>
		Войти</Link>
      </li>
    </ul>
  </div>
)

export default Avatar
