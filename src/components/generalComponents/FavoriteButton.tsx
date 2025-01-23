'use client'
import notify from '@/utils/sucessNotify'
import Image from 'next/image'

function FavoriteButton() { 
  return (
    <button onClick={(e) => console.log(e.currentTarget)} type="button">
      {/* <Image
        width={32}
        height={32}
        className="absolute hover:animate-spin top-5 right-5"
        src="/menuImages/icons8-favorite-color-96.png"
        alt="favorite"
      /> */}
    </button>
  )
}

export default FavoriteButton
