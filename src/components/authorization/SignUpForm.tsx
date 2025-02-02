import { FormEvent } from 'react'
import FormInput from './FormInput'
import LoginLink from './LoginLink'

interface SignUpFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  isPending: boolean
  state?: { message?: string; error?: string }
}

const SignUpForm = ({ onSubmit, isPending, state }: SignUpFormProps) => {
  return (
    <form onSubmit={onSubmit} className="card-body">
      <FormInput
        type="email"
        name="email"
        label="Электронная почта"
        placeholder="Введите вашу почту"
      />
      <FormInput
        type="password"
        name="password"
        label="Пароль"
        placeholder="Введите пароль"
      />
      <FormInput
        type="password"
        name="confirmPassword"
        label="Подтвердите пароль"
        placeholder="Подтвердите пароль"
      />

      <div className="form-control mt-6">
        <button type="submit" disabled={isPending} className="btn btn-primary">
          {isPending ? 'Отправка...' : 'Зарегистрироваться'}
        </button>
        {state?.message && (
          <p className="text-green-500 mt-2 text-center">{state.message}</p>
        )}
        {state?.error && (
          <p className="text-red-500 mt-2 text-center">{state.error}!</p>
        )}
        <div className="divider divider-neutral">Или</div>
        <LoginLink />
      </div>
    </form>
  )
}

export default SignUpForm
