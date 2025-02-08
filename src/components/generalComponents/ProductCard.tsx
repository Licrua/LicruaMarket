'use client'
import clsx from 'clsx'
import CardImage from './CardImage'
import Product from '@/types/product'
import useFavoriteStore from '@/storage/FavoriteStorage'
import addPurchase from '@/utils/addProduct'
import { getAuth } from 'firebase/auth'
import { auth, db } from '@/lib/fireBase'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { log } from 'node:console'
import addProduct from '@/utils/addProduct'
import useAuthStore from '@/storage/AuthState'
import notify from '@/utils/notify'
import cardProduct from '@/types/cardProduct'

function ProductCard({ product }: { product: cardProduct }) {
  const currentUser = useAuthStore((state) => state.currentUser)
  const [error, setError] = useState<string | null>(null)
  const [isPending, setPending] = useState(false)

  const handleBuyClick = async () => {
    if (currentUser) {
      setPending(true)
      try {
        await addProduct(product, currentUser.uid)
        notify.addProduct()
        setPending(false)
      } catch (err) {
        setError('Ошибка при добавлении покупки. Попробуйте снова.')
        console.error('Ошибка при добавлении покупки:', err)
      } finally {
      }
    } else {
      setError('Пользователь не авторизован.')
    }
  }

  return (
    <div className="card bg-base-100 max-h-[568px] border-2 rounded-md shadow-xl">
      <figure>
        <CardImage id={product.id} src={product.image} alt={product.name} />
      </figure>
      <div className="card-body h-[230px] pt-0 max-h-64 justify-center gap-3 items-center">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="card-title max-w-[200px] text-center tracking-widest">
            {product.name}
          </h2>
          {product.id % 2 === 0 && (
            <div className="badge badge-primary ml-2">Хит</div>
          )}
        </div>
        <div className="card-actions justify-center">
          <div className="badge badge-outline bg-amber-50">
            {product.category}
          </div>
        </div>
        {product.oldPrice ? (
          <>
            <del className="badge-md badge-error line-through opacity-65">
              Старая цена: ₽{product.oldPrice}
            </del>
            <p className="badge-md max-h-[20px] badge-success">
              Новая цена: ₽{product.currentPrice}
            </p>
          </>
        ) : (
          <p className="badge-md max-h-[20px] badge-ghost">
            Цена: ₽{product.currentPrice}
          </p>
        )}
        <button
          disabled={isPending}
          onClick={handleBuyClick}
          className={clsx(
            'btn btn-outline',
            product.oldPrice && 'border-orange-300',
            'border-purple-400'
          )}
        >
          Купить
        </button>
        <p>{error}</p>
      </div>
    </div>
  )
}
export default ProductCard
