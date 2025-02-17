'use client'
import useAuthStore from '@/storage/AuthStateStorage'
import { getAuth, signOut,  } from 'firebase/auth'
import Link from 'next/link'

const Avatar = () => {
  const { currentUser } = useAuthStore()

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
