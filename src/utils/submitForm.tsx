// // app/actions/submitForm.ts
// 'use server'
// import { error } from 'console'
// import { registerUser } from './auth'
// import { redirect } from 'next/navigation'
// import notify from './notify'
// import { FirebaseError } from 'firebase/app'

// // Указываем, что эта функция выполняется на сервере

// export async function submitForm(_: any, data: FormData) {
//   const email = data.get('email') // Получаем данные с формы
//   const password = data.get('password')
//   const registeredUser = await registerUser(email, password)
//   const confirmPassword = data.get('confirmPassword')

//   try {
// 	const registeredUser = await registerUser(email, password)
// 	if(registeredUser) {
// 		return { error: null, message: "Вы успешно вошли!", success: true };
// 		// redirect('signIn')
// 	}
//   } catch (error) {

//   }

//   if (password !== confirmPassword) {
//     return {
//       success: false,
//       error: 'Пароли не совпадают',
//     }
//   }
//   if (!email || !password) {
//     return {
//       success: false,
//       error: 'Нет логина или пароля',
//     }
//   }

//   if (registeredUser) {
//     redirect('/signIn')
//   }
// }

// app/actions/submitForm.ts
// 'use server'
// import { registerUser } from './auth'
// import { redirect } from 'next/navigation'
// import { FirebaseError } from 'firebase/app'
// import notify from './notify'

// export async function submitForm(_: any, data: FormData) {
//   // Приводим полученные данные к строке и убираем лишние пробелы
//   const email = data.get('email')?.toString().trim()
//   const password = data.get('password')?.toString()
//   const confirmPassword = data.get('confirmPassword')?.toString()

//   // 1. Проверка на заполненность полей
//   if (!email || !password || !confirmPassword) {
//     return {
//       success: false,
//       error: 'Заполните все поля.',
//     }
//   }

//   // 2. Проверка формата email (простой вариант)
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//   if (!emailRegex.test(email)) {
//     return {
//       success: false,
//       error: 'Неверный формат email.',
//     }
//   }

//   // 3. Проверка, что пароли совпадают
//   if (password !== confirmPassword) {
//     return {
//       success: false,
//       error: 'Пароли не совпадают.',
//     }
//   }

//   // 4. (Опционально) Проверка минимальной длины пароля
//   if (password.length < 6) {
//     return {
//       success: false,
//       error: 'Пароль должен быть не менее 6 символов.',
//     }
//   }

//   try {
//     // Пытаемся зарегистрировать пользователя
//     const registeredUser = await registerUser(email, password)
//     if (registeredUser) {
//       // Если регистрация успешна, перенаправляем на страницу входа
//       notify.userRegistered()
//       redirect('/signIn')
//     //   return {
//     //     success: true,
//     //     message: 'Вы успешно зарегистрировались!',
//     //     error: null,
//     //   }
//     } else {
//       return {
//         success: false,
//         error: 'Не удалось зарегистрировать пользователя.',
//       }
//     }
//   } catch (err) {
//     // Обработка ошибок, например, ошибок от Firebase
//     if (err instanceof FirebaseError) {
//       return {
//         success: false,
//         error: err.message,
//       }
//     }
//     return {
//       success: false,
//       error: 'Произошла непредвиденная ошибка.',
//     }
//   }
// }




// app/actions/submitForm.ts
// 'use server'
// import { registerUser } from './auth'
// import { redirect } from 'next/navigation'
// import { FirebaseError } from 'firebase/app'

// export async function submitForm(_: any, data: FormData) {
//   // Получаем и приводим данные к строкам
//   const email = data.get('email')?.toString().trim()
//   const password = data.get('password')?.toString()
//   const confirmPassword = data.get('confirmPassword')?.toString()

//   // Валидация данных формы
//   if (!email || !password || !confirmPassword) {
//     return {
//       success: false,
//       error: 'Заполните все поля.',
//     }
//   }

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//   if (!emailRegex.test(email)) {
//     return {
//       success: false,
//       error: 'Неверный формат email.',
//     }
//   }

//   if (password !== confirmPassword) {
//     return {
//       success: false,
//       error: 'Пароли не совпадают.',
//     }
//   }

//   if (password.length < 6) {
//     return {
//       success: false,
//       error: 'Пароль должен быть не менее 6 символов.',
//     }
//   }

//   try {
//     const registeredUser = await registerUser(email, password)
//     if (registeredUser) {
//       // Если регистрация успешна, перенаправляем пользователя
//       redirect('/signIn')
//       return {
//         success: true,
//         message: 'Вы успешно зарегистрировались!',
//         error: null,
//       }
//     } else {
//       return {
//         success: false,
//         error: 'Не удалось зарегистрировать пользователя.',
//       }
//     }
//   } catch (err) {
//     // Если ошибка от Firebase
//     if (err instanceof FirebaseError) {
//       switch (err.code) {
//         case 'auth/email-already-in-use':
//           return {
//             success: false,
//             error: 'Пользователь с таким email уже существует.',
//           }
//         case 'auth/weak-password':
//           return {
//             success: false,
//             error: 'Пароль слишком слабый.',
//           }
//         case 'auth/invalid-email':
//           return {
//             success: false,
//             error: 'Неверный формат email.',
//           }
//         // Можно добавить обработку других ошибок по необходимости
//         default:
//           return {
//             success: false,
//             error: err.message || 'Произошла ошибка при регистрации.',
//           }
//       }
//     }
//     // Если ошибка не FirebaseError, возвращаем общее сообщение
//     return {
//       success: false,
//       error: 'Произошла непредвиденная ошибка.',
//     }
//   }
// }



// 'use server'
// import { registerUser } from './auth'
// import { FirebaseError } from 'firebase/app'

// export async function submitForm(_: any, data: FormData) {
//   const email = data.get('email')?.toString().trim();
//   const password = data.get('password')?.toString();
//   const confirmPassword = data.get('confirmPassword')?.toString();

//   if (!email || !password || !confirmPassword) {
//     return { success: false, error: 'Заполните все поля.' };
//   }
//   if (password !== confirmPassword) {
//     return { success: false, error: 'Пароли не совпадают.' };
//   }
//   if (password.length < 6) {
//     return { success: false, error: 'Пароль слишком короткий.' };
//   }

//   try {
//     const registeredUser = await registerUser(email, password);
//     if (registeredUser) {
//       return { success: true, message: 'Вы успешно зарегистрировались!' };
//     }
//   } catch (err) {
//     if (err instanceof FirebaseError) {
//       switch (err.code) {
//         case 'auth/email-already-in-use':
//           return { success: false, error: 'Пользователь уже зарегистрирован.' };
//         case 'auth/weak-password':
//           return { success: false, error: 'Слишком слабый пароль.' };
//         case 'auth/invalid-email':
//           return { success: false, error: 'Неверный email.' };
//         default:
//           return { success: false, error: 'Ошибка при регистрации.' };
//       }
//     }
//     return { success: false, error: 'Неизвестная ошибка.' };
//   }
// }




// app/actions/submitRegistration.ts
'use server'
import { registerUser } from './auth' // Ваша функция регистрации через Firebase
import { FirebaseError } from 'firebase/app'
import { redirect } from 'next/navigation'

export async function submitRegistration(_: any, data: FormData) {
  const email = data.get('email')?.toString().trim()
  const password = data.get('password')?.toString()
  const confirmPassword = data.get('confirmPassword')?.toString()

  // Валидация формы
  if (!email || !password || !confirmPassword) {
    return { success: false, error: 'Заполните все поля.' }
  }
  
  // Проверка формата email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Неверный формат email.' }
  }
  
  // Проверка совпадения паролей
  if (password !== confirmPassword) {
    return { success: false, error: 'Пароли не совпадают.' }
  }
  
  // Проверка минимальной длины пароля
  if (password.length < 6) {
    return { success: false, error: 'Пароль должен быть не менее 6 символов.' }
  }

  try {
   const regUser =  await registerUser(email, password)
   if(regUser) {
	   redirect('/signIn')
   }
  } catch (err) {
    if (err instanceof FirebaseError) {
      let errorMessage: string
      switch (err.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Пользователь с таким email уже зарегистрирован.'
          break
        case 'auth/weak-password':
          errorMessage = 'Пароль слишком слабый.'
          break
        case 'auth/invalid-email':
          errorMessage = 'Неверный формат email.'
          break
        default:
          errorMessage = err.message || 'Ошибка при регистрации.'
          break
      }
      return { success: false, error: errorMessage }
    }
    return { success: false, error: 'Произошла неизвестная ошибка.' }
  }
}
