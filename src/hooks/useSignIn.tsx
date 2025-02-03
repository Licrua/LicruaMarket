import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/fireBase'
import notify from '@/utils/notify'

export function useSignIn() {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    formValues: { email: string; password: string }
  ) => {
    e.preventDefault()

    const { email, password } = formValues

    if (!email || !password) {
      setError('Заполните все поля.')
      return
    }

    setError(null)
    setIsPending(true)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      notify.userLoggedIn()
      router.push('/') // Измени маршрут, если нужно
    } catch (err: any) {
      console.error('Ошибка входа:', err)
      setError(err.message)
    } finally {
      setIsPending(false)
    }
  }

  return { onSubmit, isPending, error }
}
