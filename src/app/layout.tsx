'use client'
import 'leaflet/dist/leaflet.css'
import type { Metadata } from 'next'
import './globals.css'
import Container from '@/components/generalComponents/Container'
import Header from '@/components/header/Header'
import ToastProvider from '@/components/generalComponents/ToastProvider'
import { useEffect } from 'react'
import { initAuthListener } from '@/storage/AuthState'
import { useProductStore } from '@/storage/ProductStore'
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
  useEffect(() => {
    initAuthListener()
    const unsubscribe = fetchProducts() // Подписываемся на изменения в продуктах
    return () => unsubscribe()
  }, [])

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
