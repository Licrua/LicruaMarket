import clsx from 'clsx'
import CardImage from './CardImage'
import Product from '@/types/product'
import useFavoriteStore from '@/storage/storage'

function ProductCard({ product }: { product: Product }) {
  console.log('product', product)

  return (
    <div className="card bg-base-100 max-h-[568px] shadow-xl">
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
          className={clsx(
            'btn btn-outline',
            product.oldPrice && 'border-orange-300',
            'border-purple-400'
          )}
        >
          Купить
        </button>
      </div>
    </div>
  )
}

export default ProductCard
