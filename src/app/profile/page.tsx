'use client'
import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import renderTabContent from '@/utils/tabContent'
// import renderTabContent from '@/utils/tabContent'
// import renderConte

const tabs = [
//   { id: 'info', label: 'Личная информация' },
  { id: 'orders', label: 'История заказов' },
  { id: 'favorites', label: 'Избранное' },
  { id: 'settings', label: 'Настройки' },
]

const Profile = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [currentTab, setCurrentTab] = useState('info')

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <h1 className="text-lg font-bold">Профиль пользователя</h1>
          <p className="text-sm text-gray-500">
            Добро пожаловать, {currentUser?.displayName ? currentUser.displayName : currentUser?.email?.split('@')[0] || 'Гость'}
          </p>
        </div>
        <nav className="p-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`w-full mb-2 py-2 ${
                currentTab === tab.id ? 'btn-primary' : 'btn-outline'
              }`}
              onClick={() => setCurrentTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {renderTabContent(currentTab, currentUser)}
      </div>
    </div>
  )
}

export default Profile
