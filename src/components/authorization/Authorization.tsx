'use client'

import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import clsx from 'clsx'
import AuthContainer from '@/components/authorization/AuthContainer'
import FormButton from '@/components/authorization/FormButton'
import InputField from '@/components/authorization/InputField'
import LoginLink from '@/components/authorization/LoginLink'
import { signinFields, signupFields } from '@/data/auth-fields'
import Link from 'next/link'

interface AuthFormProps {
  type: 'signIn' | 'signUp'
}

const AuthForm = ({ type }: AuthFormProps) => {
  const isSignUp = type === 'signUp'
  const { onSubmit, isPending, error } = useAuth(type)
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <AuthContainer
      header={isSignUp ? 'Регистрация' : 'Вход'}
      greet="Добро пожаловать!"
      description={
        isSignUp
          ? 'Зарегистрируйтесь, чтобы начать пользоваться нашим сервисом.'
          : 'Войдите, используя свою электронную почту и пароль.'
      }
    >
      <form onSubmit={(e) => onSubmit(e, formValues)} className="card-body">
        {(isSignUp ? signupFields : signinFields).map((field) => (
          <InputField
            key={field.id}
            {...field}
            value={formValues[field.name as keyof typeof formValues] || ''}
            onChange={handleInputChange}
          />
        ))}

        {error && (
          <div
            className={clsx(
              'mt-4 p-4 border rounded text-center',
              'border-red-400 bg-red-50'
            )}
          >
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

        {!isSignUp && (
          <div className="form-control">
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Забыли пароль?
              </a>
            </label>
          </div>
        )}

        <div className="form-control mt-6">
          <FormButton
            isPending={isPending}
            status={isSignUp ? 'Зарегистрироваться' : 'Войти'}
          />
          <div className="divider divider-neutral">Или</div>

          {isSignUp ? (
            <LoginLink />
          ) : (
            <Link href="/signUp">
              <FormButton isPending={false} status="Зарегистрироваться" />
            </Link>
          )}
        </div>
      </form>
    </AuthContainer>
  )
}

export default AuthForm
