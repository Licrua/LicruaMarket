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
    <>
      <div className="grid justify-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 p-10 gap-8">
        <div id="hit" className="col-span-full justify-center">
          <Headline text="🔥 Горячие цены 🔥" background="bg-purple-300" />
        </div>
        {posts.map(({ id, category, currentPrice, oldPrice, image, name }) => (
          <div key={id} className="card bg-base-100  shadow-xl">
            <figure>
              <img
                src={image}
                alt={name}
                className="w-full max-h-[350px] h-[300px] object-cover"
              />
            </figure>
            <div className="card-body justify-center gap-3 items-center">
              <div className="flex flex-col gap-2 items-center ">
                <h2 className="card-title  tracking-widest">{name}</h2>
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
              <p className="badge-md max-h-[20px] badge-success">
                Новая цена: ₽{currentPrice}
              </p>
              <button className="btn btn-outline border-orange-300">
                Купить
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default MainSaleCards
