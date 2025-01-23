import { newProducts } from '@/types/cards'
import Headline from '../generalComponents/HeadLine'
import CardImage from '../generalComponents/CardImage'
async function MainNewCards() {
  const res = await fetch(
    'https://678aa3addd587da7ac2af1bd.mockapi.io/api/projectList/newGoods'
  )

  if (!res.ok) {
    throw Error('error')
  }

  const products: newProducts = await res.json()

  return (
    <>
      <Headline text={'🆕 Новинки 🆕'} background={'bg-red-50'} />
      <div className="carousel  w-full py-5 rounded-box">
        {products?.map((product) => (
          <div className="carousel-item w-[300px]  py-5" key={product.id}>
            <div>
              <CardImage src={product.image} alt={product.name} />
           
              <div className="card bg-base-100  shadow-xl mt-4">
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p className="badge badge-outline bg-amber-50">
                    {product.category}
                  </p>
                  <p>Цена: {product.currentPrice} ₽</p>	
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Купить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default MainNewCards

// https://678aa3addd587da7ac2af1bd.mockapi.io/api/projectList/newGoods
