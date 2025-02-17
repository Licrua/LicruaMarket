// import { useState } from 'react'
// import { sendPasswordResetEmail } from 'firebase/auth'
// import { auth } from '@/lib/fireBase'

// import { useRef } from 'react'

// const ResetPassword = () => {
//   const [email, setEmail] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [message, setMessage] = useState<string | null>(null)
//   const [error, setError] = useState<string | null>(null)

//   const handleResetPassword = async () => {
//     setLoading(true)
//     setError(null)
//     setMessage(null)

//     try {
//       if (!email) {
//         throw new Error('Пожалуйста, введите свой email.')
//       }

//       await sendPasswordResetEmail(auth, email)
//       setMessage(
//         'Письмо для восстановления пароля отправлено. Пожалуйста, проверьте свою почту.'
//       )
//     } catch (err) {
//       setError(
//         'Произошла ошибка при отправке письма. Убедитесь, что введенный email правильный.'
//       )
//       console.error('Error sending password reset email:', err)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className=" absolute bg-gray-100 p-6">
//       <div className="max-w-sm mx-auto bg-white p-8 rounded-xl shadow-lg">
//         <h1 className="text-3xl font-semibold text-gray-900 mb-4">
//           Восстановление пароля
//         </h1>

//         {/* Ввод почты */}
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Введите ваш email
//           </label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Ваш email"
//           />
//         </div>

//         <button
//           onClick={handleResetPassword}
//           className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           disabled={loading}
//         >
//           {loading ? 'Загрузка...' : 'Отправить инструкцию'}
//         </button>

//         {/* Сообщения об ошибке и успехе */}
//         {message && <p className="mt-4 text-green-500">{message}</p>}
//         {error && <p className="mt-4 text-red-500">{error}</p>}
//       </div>
//     </div>
//   )
// }

// // export default ResetPassword

// // function ResetPassword() {
// //   const ref = useRef(null)
// //   return (
// //     <>
// //       <button className="btn" onClick={() => ref.current?.showModal()}>
// //         Восстановить пароль
// //       </button>
// //       <dialog ref={ref} id="my_modal_2" className="modal">
// //         <div className="modal-box">
// //           <h3 className="font-bold text-lg">Восстановление пароля</h3>
// //           <p className="py-4">Press ESC key or click outside to close</p>
// //         </div>
// //         <form method="dialog" className="modal-backdrop">
// //           <button>Закрыть</button>
// //         </form>
// //       </dialog>
// //     </>
// //   )
// // }

// // export default ResetPassword

// import { useRef } from 'react'

// function ResetPassword() {
//   const modalRef = useRef<HTMLDialogElement | null>(null)

//   return (
//     <>
//       <button className="btn mt-4" onClick={() => modalRef.current?.showModal()}>
//         Восстановить пароль
//       </button>
//       <dialog ref={modalRef} id="my_modal_1" className="modal">
//         <div className="modal-box">
//           <h3 className="font-bold text-lg">Hello!</h3>
// 		   <input type="text" />
//           <p className="py-4">
//             Press ESC key or click the button below to close
//           </p>
//           <div className="modal-action ">
//             <button className="btn" onClick={() => modalRef.current?.close()}>
//               Закрыть
//             </button>
//           </div>
//         </div>
//       </dialog>
//     </>
//   )
// }

// export default ResetPassword

import { useState, useRef } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '@/lib/fireBase'
import notify from '@/utils/notify'

const ResetPassword = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const modalRef = useRef<HTMLDialogElement | null>(null)

  const handleResetPassword = async () => {
    setLoading(true)
    setError(null)
    setMessage(null)

    try {
      if (!email) {
        throw new Error('Пожалуйста, введите свой email.')
      }

      await sendPasswordResetEmail(auth, email)
      notify.notifySuccess(
        'Письмо для восстановления пароля отправлено. Пожалуйста, проверьте свою почту.'
      )
      modalRef.current?.close()
    } catch (err) {
      notify.notifyError(
        'Произошла ошибка при отправке письма. Убедитесь, что введенный email правильный.'
      )
      console.error('Error sending password reset email:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        className="btn mt-4"
        onClick={() => modalRef.current?.showModal()}
      >
        Восстановить пароль
      </button>

      <dialog ref={modalRef} id="reset_password_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Восстановление пароля</h3>
          <p className="py-2">Введите ваш email для сброса пароля</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ваш email"
          />

          <div className="modal-action mt-4">
            <button
              onClick={handleResetPassword}
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Загрузка...' : 'Отправить инструкцию'}
            </button>
            <button className="btn" onClick={() => modalRef.current?.close()}>
              Закрыть
            </button>
          </div>

          {message && <p className="mt-4 text-green-500">{message}</p>}
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </div>
      </dialog>
    </>
  )
}

export default ResetPassword
