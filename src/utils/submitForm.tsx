// app/actions/submitForm.ts
'use server'
import { error } from 'console'
import { registerUser } from './auth'
import { redirect } from 'next/navigation'
import notify from './notify'

// Указываем, что эта функция выполняется на сервере

export async function submitForm(_: any, data: FormData) {
  const email = data.get('email') // Получаем данные с формы
  const password = data.get('password')
//   notify.userRegistered()



  const confirmPassword = data.get('confirmPassword')
  if (email === '' || password === '') {
    return { error: 'Необходимо указать данные' }
  } else if (password !== confirmPassword) {
    return { error: 'Пароли не совпадают' }
  }
  const registeredUser = await registerUser(email, password)
  if (registeredUser) {
    // notify.userRegistered()
    redirect('/signIn')
  }

  return { message: 'Данные успешно получены!' }
}
