import FavoritesTab from '@/components/profile/tabs/FavoritesTab'
import OrdersTab from '@/components/profile/tabs/OrdersTab'
import SettingsTab from '@/components/profile/tabs/SettingsTab'
import { User } from 'firebase/auth'

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
