'use client'
import AuthContainer from '@/components/authorization/AuthContainer'
import FormButton from '@/components/authorization/FormButton'
import InputField from '@/components/authorization/InputField'
import StatusMessage from '@/components/authorization/StatusMessage'
import fields from '@/data/auth-fields'
import { useFormSubmit } from '@/hooks/useFormSubmit'
import notify from '@/utils/notify'
import { submitForm } from '@/utils/submitForm'
// import Link from 'next/link'
import { startTransition, useActionState } from 'react'

function SignUp() {
  const [state, formAction, isPending] = useActionState(submitForm, null)
  const { onSubmit } = useFormSubmit(formAction, notify.userRegistered)

  return (
    <AuthContainer
      header={'Регистрация'}
      greet={'Добро пожаловать!'}
      description=" Зарегистрируйтесь, чтобы начать пользоваться нашим сервисом.
              Укажите свои данные ниже."
    >
      <form onSubmit={onSubmit} className="card-body">
        {fields.map((field) => (
          <InputField
            key={field.id}
            label={field.label}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
          />
        ))}
        <div className="form-control mt-6">
          <FormButton isPending={isPending} status="Зарегистрироваться" />
          <StatusMessage state={state} />
          <div className="divider divider-neutral">Или</div>
          <FormButton isPending={isPending} status="Войти" />
        </div>
      </form>
    </AuthContainer>
  )
}

export default SignUp
