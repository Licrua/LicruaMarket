

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
