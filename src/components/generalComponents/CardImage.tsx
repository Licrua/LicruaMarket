import Image from 'next/image'
import Link from 'next/link'

function CardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full">
      <img
        src={src}
        alt={alt}
        className="w-full relative  h-[300px] p-1 object-cover bg-center rounded-lg"
      />
      {/* <Link href="/favorite"> */}
        <button type="button">
          <Image
            width={32}
            height={32}
            className="absolute hover:animate-spin top-5 right-5"
            src="/menuImages/icons8-favorite-color-96.png"
            alt="favorite"
          />
        </button>
      {/* </Link> */}
    </div>
  )
}

export default CardImage
