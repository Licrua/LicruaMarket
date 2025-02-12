import { toast } from 'react-toastify'
import Link from 'next/link'

const notify = {
  itemAdded: () =>
    toast(
      <div className="bg-green-200 p-3 rounded-lg">
        <p style={{ color: 'purple', margin: 0 }}>
          Товар добавлен в избранное!
        </p>
        <Link href="/favorite">
          <span className="bg-pink-50">Перейти в избранное?</span>
        </Link>
      </div>,
      { autoClose: 3000 }
    ),
  itemDeleted: () =>
    toast(
      <div className="bg-red-400 p-3 rounded-lg">
        <p style={{ color: 'purple', margin: 0 }}>Товар удален из избранного</p>
      </div>,
      { autoClose: 3000 }
    ),
  userRegistered: () =>
    toast(
      <div className="bg-blue-300 p-3 rounded-lg">
        <p style={{ color: 'purple', margin: 0 }}>
          Регистрация прошла успешно!
        </p>
        <p className="underline">Переходим ко входу...</p>
      </div>,
      { autoClose: 3000 }
    ),
  userLoggedIn: () =>
    toast(
      <div className="bg-green-300 p-3 rounded-lg">
        <p style={{ color: 'purple', margin: 0 }}>Вы успешно вошли!</p>
      </div>,
      { autoClose: 3000 }
    ),
  addProduct: () =>
    toast(
      <div className="bg-green-300 p-3 rounded-lg">
        <p style={{ color: 'purple', margin: 0 }}>Товар добавлен в корзину</p>
        <Link href="/cart">
          <span className="bg-pink-50 hover:scale-110">Перейти в корзину?</span>
        </Link>
      </div>,
      { autoClose: 3000 }
    ),
}

export default notify
