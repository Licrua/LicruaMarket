import PromoProductsData from '@/types/cards'
import Headline from '../generalComponents/HeadLine'
import CardImage from '../generalComponents/CardImage'
import ProductCard from '../generalComponents/ProductCard'

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
        {posts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  )
}

export default MainSaleCards
