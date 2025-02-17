
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
