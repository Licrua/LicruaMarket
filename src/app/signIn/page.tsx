// 'use client'

import AuthForm from '@/components/authorization/Authorization'

// import AuthContainer from '@/components/authorization/AuthContainer'
// import FormButton from '@/components/authorization/FormButton'
// import InputField from '@/components/authorization/InputField'
// import StatusMessage from '@/components/authorization/StatusMessage'
// import { signinFields } from '@/data/auth-fields'
// // import { useFormSubmit } from '@/hooks/useFormSubmit'
// import notify from '@/utils/notify'
// import { submitLogin } from '@/utils/submitLogin'
// import Link from 'next/link'
// import { useActionState } from 'react'

// function SignIn() {
//   const [state, signInAction, isPending] = useActionState(submitLogin, null)
// //   const { onSubmit } = useFormSubmit(signInAction, notify.userLoggedIn)

//   return (
//     <AuthContainer
//       header="Вход"
//       greet="Добро пожаловать!"
//       description="Здесь вы можете войти в систему, используя свою электронную почту и пароль. Если у вас еще нет аккаунта, зарегистрируйтесь."
//     >
//       <form onSubmit={onSubmit} className="card-body">
//         {signinFields.map((field) => (
//           <InputField
//             key={field.id}
//             label={field.label}
//             type={field.type}
//             name={field.name}
//             placeholder={field.placeholder}
//           />
//         ))}
//         <div className="form-control">
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover">
//               Забыли пароль?
//             </a>
//           </label>
//         </div>
//         <div className="form-control mt-6">
//           <FormButton isPending={isPending} status="Войти" />
//           <StatusMessage state={state} />
//           <div className="divider divider-neutral">Или</div>
//           <Link href="/signUp">
//             <FormButton isPending={isPending} status="Зарегистрироваться" />
//           </Link>
//         </div>
//       </form>
//     </AuthContainer>
//   )
// }

// export default SignIn

// 'use client'

// import { useState } from 'react'
// import { useSignIn } from '@/hooks/useSignIn'
// import AuthContainer from '@/components/authorization/AuthContainer'
// import FormButton from '@/components/authorization/FormButton'
// import InputField from '@/components/authorization/InputField'
// import StatusMessage from '@/components/authorization/StatusMessage'
// import { signinFields } from '@/data/auth-fields'
// import Link from 'next/link'

// const SignIn = () => {
//   const [formValues, setFormValues] = useState({ email: '', password: '' })
//   const { onSubmit, isPending, error } = useSignIn()

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormValues((prev) => ({ ...prev, [name]: value }))
//   }

//   return (
//     <AuthContainer
//       header="Вход"
//       greet="Добро пожаловать!"
//       description="Здесь вы можете войти в систему, используя свою электронную почту и пароль. Если у вас еще нет аккаунта, зарегистрируйтесь."
//     >
//       <form onSubmit={(e) => onSubmit(e, formValues)} className="card-body">
//         {signinFields.map((field) => (
//           <InputField
//             key={field.id}
//             {...field}
//             value={formValues[field.name]}
//             onChange={handleInputChange}
//           />
//         ))}

//         <div className="form-control">
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover">
//               Забыли пароль?
//             </a>
//           </label>
//         </div>

//         <div className="form-control mt-6">
//           <FormButton isPending={isPending} status="Войти" />
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
//           <Link href="/signUp">
//             <FormButton isPending={false} status="Зарегистрироваться" />
//           </Link>
//         </div>
//       </form>
//     </AuthContainer>
//   )
// }

// export default SignIn

// import AuthForm from '@/components/authorization/AuthForm'

const SignIn = () => <AuthForm type="signIn" />
export default SignIn
