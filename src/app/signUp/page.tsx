// 'use client'
// import AuthContainer from '@/components/authorization/AuthContainer'
// import FormButton from '@/components/authorization/FormButton'
// import InputField from '@/components/authorization/InputField'
// import LoginLink from '@/components/authorization/LoginLink'
// import StatusMessage from '@/components/authorization/StatusMessage'
// import signupFields from '@/data/auth-fields'
// import { useFormSubmit } from '@/hooks/useFormSubmit'
// import notify from '@/utils/notify'
// import { submitRegistration } from '@/utils/submitForm'
// // import Link from 'next/link'
// import { useActionState } from 'react'

// function SignUp() {
//   const [state, formAction, isPending] = useActionState(submitRegistration, {
//     success: null,
//     message: null,
//     error: null,
//   })
//   const { onSubmit } = useFormSubmit(formAction)

//   return (
//     <AuthContainer
//       header={'Регистрация'}
//       greet={'Добро пожаловать!'}
//       description=" Зарегистрируйтесь, чтобы начать пользоваться нашим сервисом.
//               Укажите свои данные ниже."
//     >
//       <form onSubmit={onSubmit} className="card-body">
//         {signupFields.map((field) => (
//           <InputField
//             key={field.id}
//             label={field.label}
//             type={field.type}
//             name={field.name}
//             placeholder={field.placeholder}
//           />
//         ))}
//         <div className="form-control mt-6">
//           <FormButton isPending={isPending} status="Зарегистрироваться" />
//           {/* <StatusMessage state={state} /> */}
//           <div className="divider divider-neutral">Или</div>
//           <LoginLink />
//           {/* <FormButton isPending={isPending} status="Войти" /> */}
//         </div>
//       </form>
//     </AuthContainer>
//   )
// }

// export default SignUp

// 'use client'
// import React, { useState } from 'react'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../../lib/fireBase'
// import { useRouter } from 'next/navigation'
// import notify from '@/utils/notify'

// const Signup = () => {
//   const router = useRouter()
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')
//   const [error, setError] = useState('')

//   const onSubmit = async (e) => {
//     e.preventDefault()

//     if (!email || !password || !confirmPassword) {
//       setError('Заполните все поля.')
//       return
//     }
//     if (password !== confirmPassword) {
//       setError('Пароли не совпадают.')
//       return
//     }

//     try {
//       // Попытка зарегистрировать пользователя через Firebase
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       )
//       console.log('Пользователь зарегистрирован:', userCredential.user)
//       notify.userRegistered()
//       router.push('/signIn')
//     } catch (err) {
//       console.error('Ошибка регистрации:', err)
//       // Здесь можно обрабатывать различные коды ошибок (например, err.code)
//       setError(err.message)
//     }
//   }

//   return (
//     <main>
//       <section>
//         <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
//           <h1>FocusApp</h1>
//           <h2>Регистрация</h2>
//           <p>Зарегистрируйтесь, чтобы начать пользоваться нашим сервисом.</p>
//           <form onSubmit={onSubmit}>
//             <div style={{ marginBottom: '1rem' }}>
//               <label htmlFor="email">Email address</label>
//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 placeholder="Email address"
//                 style={{ width: '100%', padding: '0.5rem' }}
//               />
//             </div>

//             <div style={{ marginBottom: '1rem' }}>
//               <label htmlFor="password">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 placeholder="Password"
//                 style={{ width: '100%', padding: '0.5rem' }}
//               />
//             </div>

//             <div style={{ marginBottom: '1rem' }}>
//               <label htmlFor="confirmPassword">Confirm Password</label>
//               <input
//                 id="confirmPassword"
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//                 placeholder="Confirm Password"
//                 style={{ width: '100%', padding: '0.5rem' }}
//               />
//             </div>

//             <button type="submit" style={{ padding: '0.75rem', width: '100%' }}>
//               Sign up
//             </button>
//           </form>
//           {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
//         </div>
//       </section>
//     </main>
//   )
// }

// export default Signup

'use client'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../lib/fireBase'
import { useRouter } from 'next/navigation'

// Импорт готовых компонентов
import AuthContainer from '@/components/authorization/AuthContainer'
import InputField from '@/components/authorization/InputField'
import FormButton from '@/components/authorization/FormButton'
import LoginLink from '@/components/authorization/LoginLink'
import StatusMessage from '@/components/authorization/StatusMessage'
import signupFields from '@/data/auth-fields'

function SignUp() {
  const router = useRouter()

  // Локальное состояние для значений формы и ошибки
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [isPending, setIsPending] = useState(false)

  // Обработчик изменения инпутов
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  // Обработка отправки формы
  const onSubmit = async (e) => {
    e.preventDefault()

    const { email, password, confirmPassword } = formValues

    console.log(email, password, confirmPassword)

    // Простая валидация
    // if (!email || !password || !confirmPassword) {
    //   setError('Заполните все поля.')
    //   return
    // }
    if (password !== confirmPassword) {
      setError('Пароли не совпадают.')
      return
    }
    setError('')
    setIsPending(true)
    try {
      // Регистрация через Firebase
      await createUserWithEmailAndPassword(auth, email, password)
      // Перенаправление на страницу входа при успехе
      router.push('/signIn')
    } catch (err) {
      console.error('Ошибка регистрации:', err)
      setError(err.message)
    } finally {
      setIsPending(false)
    }
  }

  return (
    <AuthContainer
      header="Регистрация"
      greet="Добро пожаловать!"
      description="Зарегистрируйтесь, чтобы начать пользоваться нашим сервисом. Укажите свои данные ниже."
    >
      <form onSubmit={onSubmit} className="card-body">
        {signupFields.map((field) => (
          <InputField
            key={field.id}
            label={field.label}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formValues[field.name as keyof typeof formValues] || ''}
            onChange={handleInputChange}
          />
        ))}
        <div className="form-control mt-6">
          <FormButton isPending={isPending} status="Зарегистрироваться" />
          {/* Вывод сообщения об ошибке, если оно есть */}
          {error && (
            <div className="mt-4 p-4 border border-red-400 bg-red-50 rounded text-center">
              <p className="text-red-600 font-medium">{error}</p>
              <em className="block mt-2 text-sm text-gray-600">
                С кодом ошибки вы можете ознакомиться здесь –{' '}
                <a
                  href="https://firebase.google.com/docs/auth/admin/errors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-600"
                >
                  документация Firebase
                </a>
              </em>
            </div>
          )}
          <div className="divider divider-neutral">Или</div>
          <LoginLink />
        </div>
      </form>
    </AuthContainer>
  )
}

export default SignUp
