import positions from '@/data/positions'

function MainSpecialOffers() {
  return (
    <div className='flex p-5 justify-center'>
      <div className="carousel max-h-[300px] flex ">
        <div
          id="slide1"
          className="carousel-item relative  p-5 bg-[#E5FFDE] w-full"
        >
          <div className="flex justify-center  items-center  z-10 flex-col gap-5 p-1">
            <h1 className="font-bold  text-2xl">Покупайте акционные товары</h1>
            <p className="italic shadow-black">И получайте вдвое больше бонусов</p>
          </div>
          <img className='absolute min-w-[200px] opacity-60 inset-x-2/4 inset-y-2/4 top-20 min-h-[210px]' src="/cart.png" alt="cart" />
          {positions.map((pos, index) => (
            <span
              key={index}
              className="font-bold text-4xl text-red-500 absolute opacity-80"
              style={pos}
            >
              +
            </span>
          ))}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle opacity-60">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle opacity-60">
              ❯
            </a>
          </div>
        </div>
        {/*
         */}
        <div
          id="slide2"
          className="carousel-item overflow-hidden bg-no-repeat  relative bg-[url('https://png.pngtree.com/thumb_back/fh260/back_our/20190614/ourmid/pngtree-happy-shopping-light-spot-poster-background-image_122448.jpg')]  p-5 w-full"
        >
			<h1 className=' leading-tight text-center text-3xl font-bold'>Доставка бесплатно от 1000 ₽</h1>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle opacity-60">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle opacity-60">
              ❯
            </a>
          </div>
        </div>
        {/*  */}
		
{/*  */}
<div
          id="slide3"
          className="carousel-item overflow-hidden  bg-no-repeat relative bg-orange-100  py-10 w-full"
        >
			<h1 className=' absolute z-10   leading-tight text-center text-3xl  font-bold'>Закажи карту и накапливай бонусы</h1>
			<img className=' opacity-60 min-w-full inset-2/4' src="/licruaCard.png" alt="" />
			<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle opacity-60">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle opacity-60">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSpecialOffers
