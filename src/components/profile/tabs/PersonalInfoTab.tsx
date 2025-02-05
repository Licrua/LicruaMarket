// import { updateEmail, updateProfile, User } from 'firebase/auth'
// import { useState } from 'react'

// const PersonalInfoTab = ({ user }: { user: User | null }) => {
//   const [name, setName] = useState(user?.displayName || '')
//   const [email, setEmail] = useState(user?.email || '')
//   const [phone, setPhone] = useState(user?.phoneNumber || '')
//   const [message, setMessage] = useState('')

//   const handleUpdateName = async () => {
//     if (user) {
//       try {
//         await updateProfile(user, { displayName: name })
//         setMessage('Имя успешно обновлено!')
//       } catch (error) {
//         console.error('Ошибка при обновлении имени:', error)
//         setMessage('Ошибка при обновлении имени.')
//       }
//     }
//   }

//   const handleUpdateEmail = async () => {
//     if (user) {
//       try {
//         await updateEmail(user, email)
//         setMessage('Email успешно обновлен!')
//       } catch (error) {
//         console.error('Ошибка при обновлении email:', error)
//         setMessage('Ошибка при обновлении email.')
//       }
//     }
//   }

//   return (
//     <div className="sm:p-6 overflow-hidden">
//       <h2 className="text-xl font-bold mb-4">Личная информация</h2>
//       <div className="divider divider-neutral"></div>

//       {/* Имя */}
//       <div className="flex items-center justify-between mb-4">
//         <div className="text-gray-700">
//           <p className="font-medium">Имя:</p>
//           <input
//             type="text"
//             className="input input-bordered w-full mt-1"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <button className="btn btn-primary ml-4" onClick={handleUpdateName}>
//           Обновить имя
//         </button>
//       </div>

//       {/* Email */}
//       <div className="flex items-center justify-between mb-4">
//         <div className="text-gray-700">
//           <p className="font-medium">Email:</p>
//           <input
//             type="email"
//             className="input input-bordered w-full mt-1"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button className="btn btn-primary ml-4" onClick={handleUpdateEmail}>
//           Обновить Email
//         </button>
//       </div>

//       {/* Телефон */}
//       <div className="flex items-center justify-between">
//         <div className="text-gray-700">
//           <p className="font-medium">Телефон:</p>
//           <input
//             type="tel"
//             className="input input-bordered w-full mt-1"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>
//         <button className="btn btn-primary ml-4">Обновить телефон</button>
//       </div>

//       {message && <p className="text-green-500 mt-4">{message}</p>}
//     </div>
//   )
// }

// export default PersonalInfoTab

// import { updateProfile, updateEmail, updatePassword, User } from 'firebase/auth'
// import { useState } from 'react'

// const PersonalInfoTab = ({ user }: { user: User | null }) => {
//   const [name, setName] = useState(user?.displayName || '')
//   const [email, setEmail] = useState(user?.email || '')
//   const [password, setPassword] = useState('')
//   const [message, setMessage] = useState('')

//   const handleUpdate = async (field: 'name' | 'email' | 'password') => {
//     if (!user) return
//     try {
//       if (field === 'name') {
//         await updateProfile(user, { displayName: name })
//         setMessage('Имя успешно обновлено!')
//       } else if (field === 'email') {
//         await updateEmail(user, email)
//         setMessage('Email успешно обновлен!')
//       } else if (field === 'password') {
//         await updatePassword(user, password)
//         setMessage('Пароль успешно обновлен!')
//         setPassword('') // Сбрасываем поле пароля после обновления
//       }
//     } catch (error) {
//       console.error(`Ошибка при обновлении ${field}:`, error)
//       setMessage(`Ошибка при обновлении ${field}.`)
//     }
//   }

//   const userInfo = [
//     {
//       label: 'Имя',
//       value: name,
//       buttonText: 'Обновить',
//       inputType: 'text',
//       onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
//         setName(e.target.value),
//       onClick: () => handleUpdate('name'),
//     },
//     {
//       label: 'Email',
//       value: email,
//       buttonText: 'Обновить',
//       inputType: 'email',
//       onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
//         setEmail(e.target.value),
//       onClick: () => handleUpdate('email'),
//     },
//     {
//       label: 'Пароль',
//       value: password,
//       buttonText: 'Обновить',
//       inputType: 'password',
//       onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
//         setPassword(e.target.value),
//       onClick: () => handleUpdate('password'),
//     },
//   ]

//   return (
//     <div className="sm:p-6 overflow-hidden">
//       <h2 className="text-xl font-bold mb-4">Личная информация</h2>
//       <div className="divider divider-neutral"></div>
//       {userInfo.map((info, index) => (
//         <div key={index} className="flex items-center justify-between mb-4">
//           <div className="w-2/3 text-gray-700">
//             <p className="font-medium">{info.label}:</p>
//             <input
//               type={info.inputType}
//               className="input input-bordered w-full mt-1"
//               value={info.value}
//               onChange={info.onChange}
//               placeholder={
//                 info.label === 'Пароль' ? 'Введите новый пароль' : ''
//               }
//             />
//           </div>
//           <button
//             className="btn btn-primary ml-4"
//             onClick={info.onClick}
//             disabled={info.label === 'Пароль' && password.length < 6} // Минимальная длина пароля
//           >
//             {info.buttonText}
//           </button>
//         </div>
//       ))}
//       {message && <p className="text-green-500 mt-4">{message}</p>}
//     </div>
//   )
// }

// export default PersonalInfoTab

'use client'
import { useState } from 'react'
import { getAuth, updateProfile, User } from 'firebase/auth'

interface PersonalInfoTabProps {
  user: User | null
}

const PersonalInfoTab: React.FC<PersonalInfoTabProps> = ({ user }) => {
  const [displayName, setDisplayName] = useState(user?.displayName || '')
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '')
  const [loading, setLoading] = useState(false)

  const handleUpdateProfile = async () => {
    if (!user) return
    setLoading(true)
    try {
      await updateProfile(user, {
        displayName,
        photoURL,
      })
      alert('Профиль успешно обновлён!')
    } catch (error: any) {
      console.error('Ошибка при обновлении профиля:', error)
      alert(`Ошибка: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Обновить профиль</h2>
      <div className="divider"></div>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Имя</label>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Фото профиля (URL)</label>
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      <button
        className={`btn btn-primary ${loading ? 'loading' : ''}`}
        onClick={handleUpdateProfile}
      >
        Сохранить
      </button>
    </div>
  )
}

export default PersonalInfoTab
