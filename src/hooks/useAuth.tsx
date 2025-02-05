import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '@/lib/fireBase'
import notify from '@/utils/notify'

type AuthType = 'signIn' | 'signUp'

export const useAuth = (type: AuthType) => {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const onSubmit = async (
    e: React.FormEvent,
    formValues: { email: string; password: string; confirmPassword?: string }
  ) => {
    e.preventDefault()
    const { email, password, confirmPassword } = formValues

    if (!email || !password || (type === 'signUp' && !confirmPassword)) {
      setError('Заполните все поля.')
      return
    }

    if (type === 'signUp' && password !== confirmPassword) {
      setError('Пароли не совпадают.')
      return
    }

    setError(null)
    setIsPending(true)

    try {
      if (type === 'signUp') {
        await createUserWithEmailAndPassword(auth, email, password)
        notify.userRegistered()
        router.push('/signIn')
      } else {
        await signInWithEmailAndPassword(auth, email, password)
        notify.userLoggedIn()
        router.push('/')
      }
    } catch (err: any) {
      console.error('Ошибка авторизации:', err)
      setError(err.message)
    } finally {
      setIsPending(false)
    }
  }

  return { onSubmit, isPending, error }
}
