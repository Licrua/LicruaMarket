import PromoProductsData from '@/types/cards'
import Headline from '../generalComponents/HeadLine'

async function MainSaleCards() {
  const res = await fetch(
    'https://678aa3addd587da7ac2af1bd.mockapi.io/api/projectList/nnn'
  )

  if (!res.ok) {
    throw Error('error')
  }

  const posts: PromoProductsData = await res.json()

  return (
    <div className="grid grid-cols-1 items-center p-10 gap-8">
      <Headline text='Горячие цены 🔥' background='bg-purple-300'  />
      {/* <h2 className="text-3xl font-bold text-center text-red-600">

         Горячие цены 
      </h2> */}
      {posts.map(({ id, category, currentPrice, oldPrice, image, name }) => (
        <div key={id} className="card bg-base-100 w-98 shadow-xl">
          <figure>
            <img
              src={image}
              alt={name}
              className="w-full h-auto object-cover"
            />
          </figure>
          <div className="card-body justify-center gap-3 items-center">
            <div className="flex flex-col gap-2 items-center ">
              <h2 className="card-title tracking-widest">{name}</h2>
              {/* <div className="badge badge-secondary ml-2">Новинка</div> */}
              {id % 2 === 0 && (
                <div className="badge badge-primary ml-2">Хит</div>
              )}
            </div>
            <div className="card-actions justify-center">
              <div className={`badge badge-outline bg-amber-50`}>
                {category}
              </div>
              <div className={`badge badge-outline bg-purple-100`}>
                Продукты
              </div>
            </div>
            <del className="badge-md badge-error line-through opacity-65">
              Старая цена: ₽{oldPrice}
            </del>
            <p className="badge-md badge-success">
              Новая цена: ₽{currentPrice}
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

export default MainSaleCards
