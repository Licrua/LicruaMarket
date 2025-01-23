import FavoriteDivider from '@/components/favoritePage/FavoriteDivider'
import playfairDisplay from '@/fonts/header-font'

function Favorite() {
  return (
    <div>
      <h1 className={`text-xl mt-10 ${playfairDisplay.className}`}>Избранное</h1>
      <FavoriteDivider />
    </div>
  )
}

export default Favorite
