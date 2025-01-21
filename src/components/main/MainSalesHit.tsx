import { newProducts } from '@/types/cards'
import Headline from '../generalComponents/HeadLine'

async function MainLeaderCards() {
  const res = await fetch(
    'https://run.mocky.io/v3/ada7ea4f-0a1d-4ef3-8dfc-84824b6a0e06'
  )

  if (!res.ok) {
    throw Error('error')
  }
  const items: newProducts = await res.json()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center p-10 gap-8">
      <Headline text='Лидеры продаж 🌟' background='bg-red-100' />
      {/* <h2 className="text-3xl font-bold text-center text-red-600">
		  🌟 Лидеры продаж 🌟
		</h2> */}
      {items.map(({ id, name, currentPrice, image, category }) => (
        <div key={id} className="card bg-base-100 w-98 shadow-xl">
          <figure>
            <img
              src={image}
              alt={name}
              className="w-full h-64 object-cover bg-center rounded-t-lg"
            />
          </figure>
          <div className="card-body justify-center gap-3 items-center">
            <div className="flex flex-col gap-2 items-center ">
              <h2 className="card-title tracking-widest">{name}</h2>
              <div className="badge badge-primary ml-2">Лидер продаж</div>
            </div>
            <div className="card-actions justify-center">
              <div className="badge badge-outline bg-amber-50">{category}</div>
            </div>
            <p className="badge-md badge-success rounded-full">
              Цена: ₽{currentPrice}
            </p>
            <button className="btn btn-outline border-orange-300">
              Купить
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default MainLeaderCards
