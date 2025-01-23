import FavoriteDivider from '@/components/favoritePage/FavoriteDivider'
import playfairDisplay from '@/fonts/header-font'

function Favorite() {
  return (
    <div>
      <h1 className={`text-xl mt-10 text-center ${playfairDisplay.className}`}>
        <span className='text-purple-500 backdrop-opacity-80'>Избранное</span>
      </h1>
      <FavoriteDivider />
    </div>
  )
}

export default Favorite
