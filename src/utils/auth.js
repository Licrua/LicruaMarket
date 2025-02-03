// auth.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../lib/fireBase'

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
	
    const user = userCredential?.user
    console.log('User registered:', email)
    console.log('User registered:', password)
    console.log('User registered:', user)

    return user
  } catch (error) {
    console.error('Error registering user:', error.message)
    return null
  }
}

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential?.user
    console.log('User logged in:', user)
    return user // Возвращаем user, чтобы знать, что вход прошел успешно
  } catch (error) {
    console.error('Error logging in user:', error.message)
    return null // Если ошибка, возвращаем null
  }
}
