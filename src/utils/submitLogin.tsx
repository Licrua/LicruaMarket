// // app/actions/submitForm.ts
// 'use server'
// import { error } from 'console'
// import { loginUser, registerUser } from './auth'
// import { redirect } from 'next/navigation'
// import notify from './notify'

// export async function submitLogin(_: any, data: FormData) {
//   const email = data.get('email')
//   const password = data.get('password')

//   if (email === '') {
//     return { error: 'Необходимо указать данные' }
//   }
//   const login_user = await loginUser(email, password)
//   console.log('loginUser', login_user)

//   if (login_user) {
//     redirect('/')
//   }

// //   return { message: 'Данные успешно получены!' }
// }

// app/actions/submitLogin.ts
'use client'
import { loginUser } from './auth' // Ваша функция входа через Firebase
import { FirebaseError } from 'firebase/app'
import { redirect } from 'next/navigation'

export async function submitLogin(_: any, data: FormData) {
  const email = data.get('email')?.toString().trim()
  const password = data.get('password')?.toString()

  // Валидация формы
  if (!email || !password) {
    return { success: false, error: 'Введите email и пароль.' }
  }

  try {
    const userCredential = await loginUser(email, password)
    // Если вход успешен, перенаправляем пользователя
    if (userCredential) {
      redirect('/')
    }
    return { success: true, message: 'Вы успешно вошли!' }
  } catch (err) {
    if (err instanceof FirebaseError) {
      let errorMessage: string
      switch (err.code) {
        case 'auth/user-not-found':
          errorMessage = 'Пользователь с таким email не найден.'
          break
        case 'auth/wrong-password':
          errorMessage = 'Неверный пароль.'
          break
        case 'auth/invalid-email':
          errorMessage = 'Неверный формат email.'
          break
        default:
          errorMessage = err.message || 'Ошибка при входе.'
          break
      }
      return { success: false, error: errorMessage }
    }
    return { success: false, error: 'Произошла неизвестная ошибка.' }
  }
}
