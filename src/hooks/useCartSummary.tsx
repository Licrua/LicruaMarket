import { useProductStore } from '@/storage/ProductStore'
import { useMemo } from 'react'
// import { useProductStore } from '@/store/ProductStore'

export const useCartSummary = () => {
  const { products } = useProductStore((state) => state)

  const cartLength = useMemo(
    () => products.reduce((acc, item) => acc + item.quantity, 0),
    [products]
  )

  const cartTotalSumm = useMemo(
    () =>
      products.reduce(
        (acc, item) => acc + item.productPrice * item.quantity,
        0
      ),
    [products]
  )

  return { cartLength, cartTotalSumm }
}
