// 'use client'
// import React, { useState } from 'react'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../../lib/fireBase'
// import { useRouter } from 'next/navigation'

import AuthForm from '@/components/authorization/Authorization'

// // Импорт готовых компонентов
// import AuthContainer from '@/components/authorization/AuthContainer'
// import InputField from '@/components/authorization/InputField'
// import FormButton from '@/components/authorization/FormButton'
// import LoginLink from '@/components/authorization/LoginLink'
// import signupFields from '@/data/auth-fields'
// import notify from '@/utils/notify'

// function SignUp() {
//   const router = useRouter()

//   // Локальное состояние для значений формы и ошибки
//   const [formValues, setFormValues] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//   })
//   const [error, setError] = useState('')
//   const [isPending, setIsPending] = useState(false)

//   // Обработчик изменения инпутов
//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormValues((prev) => ({ ...prev, [name]: value }))
//   }

//   // Обработка отправки формы
//   const onSubmit = async (e) => {
//     e.preventDefault()

//     const { email, password, confirmPassword } = formValues

//     console.log(email, password, confirmPassword)

//     if (!password || !confirmPassword) {
//       setError('Заполните все поля.')
//       return
//     }
//     if (password !== confirmPassword) {
//       setError('Пароли не совпадают.')
//       return
//     }
//     setError('')
//     setIsPending(true)
//     try {
//       // Регистрация через Firebase
//       await createUserWithEmailAndPassword(auth, email, password)
//       // Перенаправление на страницу входа при успехе
//       notify.userRegistered()
//       router.push('/signIn')
//     } catch (err) {
//       console.error('Ошибка регистрации:', err)
//       setError(err.message)
//     } finally {
//       setIsPending(false)
//     }
//   }

//   return (
//     <AuthContainer
//       header="Регистрация"
//       greet="Добро пожаловать!"
//       description="Зарегистрируйтесь, чтобы начать пользоваться нашим сервисом. Укажите свои данные ниже."
//     >
//       <form onSubmit={onSubmit} className="card-body">
//         {signupFields.map((field) => (
//           <InputField
//             key={field.id}
//             label={field.label}
//             type={field.type}
//             name={field.name}
//             placeholder={field.placeholder}
//             value={formValues[field.name as keyof typeof formValues] || ''}
//             onChange={handleInputChange}
//           />
//         ))}
//         <div className="form-control mt-6">
//           <FormButton isPending={isPending} status="Зарегистрироваться" />
//           {/* Вывод сообщения об ошибке, если оно есть */}
//           {error && (
//             <div className="mt-4 p-4 border border-red-400 bg-red-50 rounded text-center">
//               <p className="text-red-600 font-medium">{error}</p>
//               <em className="block mt-2 text-sm text-gray-600">
//                 С кодом ошибки вы можете ознакомиться здесь –{' '}
//                 <a
//                   href="https://firebase.google.com/docs/auth/admin/errors"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 underline hover:text-blue-600"
//                 >
//                   документация Firebase
//                 </a>
//               </em>
//             </div>
//           )}
//           <div className="divider divider-neutral">Или</div>
//           <LoginLink />
//         </div>
//       </form>
//     </AuthContainer>
//   )
// }

// export default SignUp
// 'use client'
// import { useState } from 'react'
// import { useSignUp } from '@/hooks/useSignUp'
// import AuthContainer from '@/components/authorization/AuthContainer'
// import FormButton from '@/components/authorization/FormButton'
// import InputField from '@/components/authorization/InputField'
// import LoginLink from '@/components/authorization/LoginLink'
// import signupFields from '@/data/auth-fields'

// const SignUp = () => {
//   const [formValues, setFormValues] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//   })
//   const { onSubmit, isPending, error } = useSignUp()

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormValues((prev) => ({ ...prev, [name]: value }))
//   }

//   return (
//     <AuthContainer
//       header="Регистрация"
//       greet="Добро пожаловать!"
//       description="Зарегистрируйтесь, чтобы начать пользоваться нашим сервисом."
//     >
//       <form onSubmit={(e) => onSubmit(e, formValues)} className="card-body">
//         {signupFields.map((field) => (
//           <InputField
//             key={field.id}
//             {...field}
//             value={formValues[field.name as keyof typeof formValues] || ''}
//             onChange={handleInputChange}
//           />
//         ))}

//         <div className="form-control mt-6">
//           <FormButton isPending={isPending} status="Зарегистрироваться" />
// 		    {error && (
//             <div className="mt-4 p-4 border border-red-400 bg-red-50 rounded text-center">
//               <p className="text-red-600 font-medium">{error}</p>
//               <em className="block mt-2 text-sm text-gray-600">
//                 С кодом ошибки вы можете ознакомиться здесь –{' '}
//                 <a
//                   href="https://firebase.google.com/docs/auth/admin/errors"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 underline hover:text-blue-600"
//                 >
//                   документация Firebase
//                 </a>
//               </em>
//             </div>
//           )}
//           <div className="divider divider-neutral">Или</div>
//           <LoginLink />
//         </div>
//       </form>
//     </AuthContainer>
//   )
// }

// export default SignUp

// import AuthForm from '@/components/authorization/AuthForm'

const SignUp = () => <AuthForm type="signUp" />
export default SignUp
