'use client'
import 'leaflet/dist/leaflet.css'
import type { Metadata } from 'next'
import './globals.css'
import Container from '@/components/generalComponents/Container'
import Header from '@/components/header/Header'
import ToastProvider from '@/components/generalComponents/ToastProvider'
import { useEffect } from 'react'
import useAuthStore, { initAuthListener } from '@/storage/AuthState'
import { useProductStore } from '@/storage/ProductStore'
import { useAuth } from '@/hooks/useAuth'
import { auth } from '@/lib/fireBase'
import { getAuth } from 'firebase/auth'
// import { initializeAuthListener } from '@/storage/AuthStorage'

// export const metadata: Metadata = {
//   title: 'Licrua Shop',
//   description: '...',
// }
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const fetchProducts = useProductStore((state) => state.fetchProducts)
  const currentUser = useAuthStore((state) => state.currentUser)

  useEffect(() => {
    initAuthListener() // Инициализация слушателя авторизации

    if (currentUser) {
      const unsubscribe = fetchProducts(currentUser.uid) // Передаём userId в fetchProducts
      return () => unsubscribe() // Отписываемся при размонтировании
    }
  }, [currentUser, fetchProducts])

  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <ToastProvider />
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  )
}
