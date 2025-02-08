'use client'
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
import { useProductStore } from '@/storage/ProductStore'
import { useEffect } from 'react'

const Header = () => {
  const products = useProductStore((state) => state.products)


  return (
    <header>
      <HeaderNovbar>
        <HeaderLogo />
        <HeaderMenu />
        <HeaderFrame>
          <HeaderDropDown>
            <HeaderCart products={products} />
            <HeaderCartDetails products={products} />
          </HeaderDropDown>
          <Avatar />
        </HeaderFrame>
      </HeaderNovbar>
    </header>
  )
}
export default Header
