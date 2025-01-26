'use client'
import useFavoriteStore from '@/storage/storage'
import notify from '@/utils/notify'
import clsx from 'clsx'
import Image from 'next/image'

function FavoriteButton({ id }: { id: number }) {
  const { favoriteIds, addFavorite, removeFavorite, isFavorite } =
    useFavoriteStore()

  const toggleFavorite = (id: number) => {
    if (favoriteIds.includes(id)) {
		removeFavorite(id)
      notify.itemDeleted()
    } else {
		addFavorite(id)
      notify.itemAdded()
    }
  }

  return (
    <button onClick={() => toggleFavorite(id)} type="button">
      <Image
        width={32}
        height={32}
        className="absolute hover:animate-spin top-5 right-5"
        src={clsx(
          isFavorite(id)
            ? '/menuImages/icons8-favorite-32.png'
            : '/menuImages/icons8-favorite-color-96.png'
        )}
        alt="favorite"
      />
    </button>
  )
}

export default FavoriteButton

// /menuImages/icons8-favorite-color-96.png
