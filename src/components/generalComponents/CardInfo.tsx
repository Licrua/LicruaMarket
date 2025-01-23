import { newProducts } from '@/types/cards'

function CardInfo({ product }: newProducts) {
  return (
    <div className="card bg-base-100  shadow-xl mt-4">
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="badge badge-outline bg-amber-50">{product.category}</p>
        <p>Цена: {product.currentPrice} ₽</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Купить</button>
        </div>
      </div>
    </div>
  )
}

export default CardInfo
