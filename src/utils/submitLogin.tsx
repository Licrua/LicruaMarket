 // app/actions/submitForm.ts
 'use server'
 import { error } from 'console'
 import { loginUser, registerUser } from './auth'
 import { redirect } from 'next/navigation'
 import notify from './notify'
 
 // Указываем, что эта функция выполняется на сервере
 
 export async function submitLogin(_: any, data: FormData) {
   const email = data.get('email') // Получаем данные с формы
   const password = data.get('password')
 //   notify.userRegistered()
 
 
 
   if (email === '') {
	 return { error: 'Необходимо указать данные' }
   } 
   const login_user = await loginUser(email, password)
   if (login_user) {
	 // notify.userRegistered()
	 redirect('/')
   }
 
   return { message: 'Данные успешно получены!' }
 }
 