import { newProducts } from '@/types/cards'
import Headline from '../generalComponents/HeadLine'
import ProductCard from '../generalComponents/ProductCard'
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
            <ProductCard product={product} key={product.id} />
          </div>
        ))}
      </div>
    </>
  )
}

export default MainNewCards

// https://678aa3addd587da7ac2af1bd.mockapi.io/api/projectList/newGoods
