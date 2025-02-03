import { startTransition, FormEvent } from 'react'

type FormAction = (formData: FormData) => void
type NotifyFunction = (() => void) | null

export const useFormSubmit = (
  action: FormAction,
  NotifyFunction: NotifyFunction
) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (NotifyFunction) {
      NotifyFunction()
    }

    startTransition(() => {
      action(new FormData(e.currentTarget))
    })
  }

  return { onSubmit }
}
