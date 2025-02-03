import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/fireBase'
import notify from '@/utils/notify'

export function useSignUp() {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    formValues: { email: string; password: string; confirmPassword: string }
  ) => {
    e.preventDefault()

    const { email, password, confirmPassword } = formValues

    if (!email || !password || !confirmPassword) {
      setError('Заполните все поля.')
      return
    }

    if (password !== confirmPassword) {
      setError('Пароли не совпадают.')
      return
    }

    setError(null)
    setIsPending(true)

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      notify.userRegistered()
      router.push('/signIn')
    } catch (err: any) {
      console.error('Ошибка регистрации:', err)
      setError(err.message)
    } finally {
      setIsPending(false)
    }
  }

  return { onSubmit, isPending, error }
}
