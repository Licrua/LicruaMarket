// 'use client'
// import { useFormSubmit } from '@/hooks/useFormSubmit'
// import notify from '@/utils/notify'
// import { submitLogin } from '@/utils/submitLogin'
// // Предположим, что у вас есть серверная функция для входа (sign in)
// // import { submitSignIn } from '@/utils/submitSignIn'
// import Link from 'next/link'
// import { startTransition, useActionState } from 'react'

// function SignIn() {
//   // useActionState возвращает массив с текущим состоянием,
//   // функцией для вызова серверного действия и флагом загрузки
//   const [state, signInAction, isPending] = useActionState(submitLogin, null)
//   const { onSubmit } = useFormSubmit(signInAction, notify.userLoggedIn)

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="text-center lg:text-left">
//           <h1 className="text-5xl font-bold">Войдите сейчас!</h1>
//           <p className="py-6">
//             Здесь вы можете войти в систему, используя свою электронную почту и
//             пароль. Если у вас еще нет аккаунта, зарегистрируйтесь.
//           </p>
//         </div>
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <form onSubmit={onSubmit} className="card-body">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Электронная почта</span>
//               </label>
//               <input
//                 type="email"
//                 placeholder="Введите вашу почту"
//                 className="input input-bordered"
//                 name="email"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Пароль</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="Введите пароль"
//                 className="input input-bordered"
//                 name="password"
//                 required
//               />
//               <label className="label">
//                 <a href="#" className="label-text-alt link link-hover">
//                   Забыли пароль?
//                 </a>
//               </label>
//             </div>
//             <div className="form-control mt-6">
//               <button
//                 type="submit"
//                 disabled={isPending}
//                 className="btn btn-primary"
//               >
//                 {isPending ? 'Вход...' : 'Войти'}
//               </button>
//               {state?.message && (
//                 <p className="text-green-500 mt-2 text-center">
//                   {state.message}
//                 </p>
//               )}
//               {state?.error && (
//                 <p className="text-red-500 mt-2 text-center">{state.error}!</p>
//               )}
//               <div className="divider divider-neutral">Или</div>
//               <div>
//                 <Link href={'/signUp'}>
//                   <button className="btn text-center w-full btn-primary">
//                     Зарегистрироваться
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SignIn

'use client'

import AuthContainer from '@/components/authorization/AuthContainer'
import FormButton from '@/components/authorization/FormButton'
import InputField from '@/components/authorization/InputField'
import StatusMessage from '@/components/authorization/StatusMessage'
import { signinFields } from '@/data/auth-fields'
import { useFormSubmit } from '@/hooks/useFormSubmit'
import notify from '@/utils/notify'
import { submitLogin } from '@/utils/submitLogin'
import Link from 'next/link'
import { useActionState } from 'react'

function SignIn() {
  const [state, signInAction, isPending] = useActionState(submitLogin, null)
  const { onSubmit } = useFormSubmit(signInAction, notify.userLoggedIn)

  return (
    <AuthContainer
      header="Вход"
      greet="Добро пожаловать!"
      description="Здесь вы можете войти в систему, используя свою электронную почту и пароль. Если у вас еще нет аккаунта, зарегистрируйтесь."
    >
      <form onSubmit={onSubmit} className="card-body">
        {signinFields.map((field) => (
          <InputField
            key={field.id}
            label={field.label}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
          />
        ))}
        <div className="form-control">
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Забыли пароль?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <FormButton isPending={isPending} status="Войти" />
          <StatusMessage state={state} />
          <div className="divider divider-neutral">Или</div>
          <Link href="/signUp">
            <FormButton isPending={isPending} status="Зарегистрироваться" />
          </Link>
        </div>
      </form>
    </AuthContainer>
  )
}

export default SignIn
