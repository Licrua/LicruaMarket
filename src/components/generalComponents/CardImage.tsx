import Image from 'next/image'
import Link from 'next/link'
import FavoriteButton from './FavoriteButton'

function CardImage({
  src,
  alt,
  id,
}: {
  src: string | undefined
  alt: string | undefined
  id: number | undefined
}) {
  return (
    <div className="relative w-full">
      <img
        src={src}
        alt={alt}
        className="w-full relative  h-[300px] p-1 object-cover bg-center rounded-lg"
      />
      <FavoriteButton id={id} />
    </div>
  )
}

export default CardImage
