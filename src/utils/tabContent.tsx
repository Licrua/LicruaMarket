// const renderTabContent = (tab: string, currentUser) => {
//   switch (tab) {
//     case 'info':
//       return (
//         <div className="p-6">
//           <h2 className="text-xl font-bold mb-4">Личная информация</h2>
//           <p>Имя: Иван Иванов</p>
//           <p>Email: ivan@example.com</p>
//           <p>Телефон: +7 900 123 45 67</p>
//         </div>
//       )
//     case 'orders':
//       return (
//         <div className="p-6">
//           <h2 className="text-xl font-bold mb-4">История заказов</h2>
//           <ul>
//             <li>Заказ №12345 — Доставлен 01.02.2025</li>
//             <li>Заказ №12346 — В обработке</li>
//             <li>Заказ №12347 — Отменен</li>
//           </ul>
//         </div>
//       )
//     case 'favorites':
//       return (
//         <div className="p-6">
//           <h2 className="text-xl font-bold mb-4">Избранное</h2>
//           <p>Здесь будут ваши избранные товары.</p>
//         </div>
//       )
//     case 'settings':
//       return (
//         <div className="p-6">
//           <h2 className="text-xl font-bold mb-4">Настройки</h2>
//           <p>Здесь вы можете изменить пароль и настройки уведомлений.</p>
//         </div>
//       )
//     default:
//       return <p>Выберите раздел.</p>
//   }

import FavoritesTab from '@/components/profile/tabs/FavoritesTab'
import OrdersTab from '@/components/profile/tabs/OrdersTab'
import PersonalInfoTab from '@/components/profile/tabs/PersonalInfoTab'
import SettingsTab from '@/components/profile/tabs/SettingsTab'
import { User } from 'firebase/auth'

// }
const renderTabContent = (tab: string, user: User | null) => {
  switch (tab) {
    case 'orders':
      return <OrdersTab />
    case 'favorites':
      return <FavoritesTab />
    case 'settings':
      return <SettingsTab />
    default:
      return <p>Выберите раздел.</p>
  }
}
export default renderTabContent
