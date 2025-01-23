import Link from 'next/link'
import { toast } from 'react-toastify'

const notify = () => {
  toast(
    <div>
      <p style={{ color: 'purple' }}>Товар добавлен в избранное! </p>
      <Link style={{ textDecoration: 'underline' }} href="/favorite">
        Перейти в избранное?
      </Link>
    </div>,
    { autoClose: 3000 }
  )
}
export default notify
