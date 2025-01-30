// app/actions/submitForm.ts
'use server'
import { error } from "console";

 // Указываем, что эта функция выполняется на сервере

export async function submitForm(_: any, data: FormData) {
  const email = data.get('email') // Получаем данные с формы
  const password = data.get('password')
  const confirmPassword = data.get('confirmPassword')
	if(email === '' || password === '') {
		return {error: "Необходимо имя"}
	}
	else if(password !== confirmPassword) {
		return {error: 'Пароли не совпадают'}
	}
	
  
  console.log('data', data);
  console.log('Получены данные:', { email, password })

  return { message: 'Данные успешно получены!' }
}
