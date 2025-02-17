'use client'
import clsx from 'clsx'
import CardImage from './CardImage'
import { useState } from 'react'
import useAuthStore from '@/storage/AuthStateStorage'
import notify from '@/utils/notify'
import cardProduct from '@/types/cardProduct'
import { useProductStore } from '@/storage/ProductStore'

function ProductCard({ product }: { product: cardProduct }) {
  const currentUser = useAuthStore((state) => state.currentUser)
  const { addProduct } = useProductStore()
  const [error, setError] = useState<string | null>(null)
  const [isPending, setPending] = useState(false)

  console.log('product', product)

  const handleBuyClick = async () => {
    if (currentUser) {
      setPending(true)
      try {
        await addProduct(product, currentUser.uid)
        notify.addProduct()
        setPending(false)
      } catch (err) {
        setError('Ошибка при добавлении покупки. Попробуйте снова.')
        notify.productError(error)
        console.error('Ошибка при добавлении покупки:', err)
      } finally {
      }
    } else {
      setError('Пользователь не авторизован.')
      notify.productError(error)
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
        <div className="tooltip" data-tip={clsx(isPending ? 'Отправка' : 'Авторизуйтесь')}>
          <button
            disabled={isPending || !currentUser}
            onClick={handleBuyClick}
            className={clsx(
              'btn btn-outline',
              product.oldPrice && 'border-orange-300',
              'border-purple-400'
            )}
          >
            Купить
          </button>
        </div>
        {/* <p>{error}</p> */}
      </div>
    </div>
  )
}
export default ProductCard
