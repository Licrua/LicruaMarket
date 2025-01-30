'use client'
import { submitForm } from '@/utils/submitForm'
import Link from 'next/link'
import { useActionState } from 'react'

function SignUp() {
  const [state, formAction, isPending] = useActionState(submitForm, null)

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl py-3 font-bold">Регистрация</h1>
          <span className="bg-purple-200 p-1">Добро пожаловать!</span>
          <p>
            <em>
              Зарегистрируйтесь, чтобы начать пользоваться нашим сервисом.
              Укажите свои данные ниже.
            </em>
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form action={formAction} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Электронная почта</span>
              </label>
              <input
                type="email"
                placeholder="Введите вашу почту"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Пароль</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Введите пароль"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Подтвердите пароль</span>
              </label>
              <input
                type="confirmPassword"
                name="confirmPassword"
                placeholder="Подтвердите пароль"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button disabled={isPending} className="btn btn-primary">
                {isPending ? 'Отправка...' : 'Зарегистрироваться'}
              </button>
              {state?.message && <p>{state.message}</p>}
              <div className="divider divider-neutral">Или</div>
              {/* <button  className="btn btn-primary">
                Войти
              </button> */}
              <Link href={'/logIn'}>Войти</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
