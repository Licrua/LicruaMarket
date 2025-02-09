'use client'
import { auth } from '@/lib/fireBase'
import useAuthStore from '@/storage/AuthState'
import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth'
import Link from 'next/link'
import { useEffect, useState } from 'react'
// import { auth } from '../../lib/fireBase'

const Avatar = () => {
//   const [user, setUser] = useState<User | null>(null)
  const { currentUser } = useAuthStore()

//   console.log('user', user)

//   useEffect(() => {
//     // Устанавливаем наблюдателя
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       console.log('auth', auth.currentUser)
//       console.log('user', user)
//       setUser(user) // Обновляем состояние, когда пользователь аутентифицируется или выходит
//     })

//     return () => unsubscribe() // Отписка при размонтировании
//   }, [])

  const handleSignOut = async () => {
    const auth = getAuth()
    await signOut(auth)
  }

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 p-1 rounded-full">
          <img
            alt="User Avatar"
            // src={user?.photoURL || '/avatar.avif'}
            srcSet={currentUser ? '/auth.png' : '/unauth.png'}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        {currentUser ? (
          <>
            <li>
              <Link href={'/profile'} className="justify-between">
                Профиль <span className="badge">Новинка</span>
              </Link>
            </li>
            <li>
              <Link href={'/settings'}>Настройки</Link>
            </li>
            <li>
              <button onClick={handleSignOut}>Выйти</button>
            </li>
          </>
        ) : (
          <li>
            <Link href={'/signIn'}>Войти</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Avatar
