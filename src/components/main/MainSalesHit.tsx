import { newProducts } from '@/types/cards'
import Headline from '../generalComponents/HeadLine'
import CardImage from '../generalComponents/CardImage'
import ProductCard from '../generalComponents/ProductCard'

async function MainLeaderCards() {
  const res = await fetch(
    'https://run.mocky.io/v3/ada7ea4f-0a1d-4ef3-8dfc-84824b6a0e06'
  )

  if (!res.ok) {
    throw Error('error')
  }
  const items: newProducts = await res.json()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center p-10 gap-8">
      <div className="col-span-full justify-center">
        <Headline text="🌟 Лидеры продаж 🌟" background="bg-red-100" />
      </div>
      {items.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}
export default MainLeaderCards
