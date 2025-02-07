import HeaderLogo from './HeaderLogo'
import HeaderCart from './HeaderCart'
import HeaderCartDetails from './HeaderCartDetails'
import HeaderDropDown from './HeaderDropdown'
import Avatar from '../generalComponents/Avatar'
import HeaderFrame from './HeaderFrame'
import HeaderNovbar from './HeaderNovbar'
import HeaderMenu from './HeaderMenu'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/fireBase'

const Header = async () => {
  const querySnapshot = await getDocs(collection(db, 'product'))
  const product = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
  console.log('product', product)

  return (
    <header>
      <HeaderNovbar>
        <HeaderLogo />
        <HeaderMenu />
        <HeaderFrame>
          <HeaderDropDown>
            <HeaderCart prods={product} />
            <HeaderCartDetails prods={product} />
          </HeaderDropDown>
          <Avatar />
        </HeaderFrame>
      </HeaderNovbar>
    </header>
  )
}
export default Header
