import slides from '@/data/offers-data'
import playfairDisplay from '@/fonts/header-font'

function MainSpecialOffers() {
  return (
    <div className="flex p-5 justify-center">
      <div className="carousel w-full h-[300px] min-h-[300px] flex">
        {slides.map((slide, index) => (
          <div
            key={index}
            id={slide.id}
            className={`carousel-item overflow-hidden bg-no-repeat relative ${
              index === 2 ? 'bg-purple-500' : 'bg-green-400'
            } flex justify-center  w-full py-10`}
            style={
              slide.bgImage
                ? {
                    backgroundImage: `url(${slide.bgImage})`,
                    backgroundSize: 'cover',
                  }
                : {}
            }
          >
            <h2
              className={`absolute ${playfairDisplay.className} tracking-widest z-10  leading-tight  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-extrabold text-white`}
            >
              {slide.title}
            </h2>
            <p>{slide.description}</p>
            {slide.image && (
              <img
                className="absolute min-w-[200px]  opacity-50 top-1/2 left-1/2 transform -translate-x-2/3 -translate-y-1/2 min-h-[210px]"
                src={slide.image}
                alt="slide-image"
              />
            )}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={slide.btnLinks.prev}
                className="btn btn-circle opacity-60"
              >
                ❮
              </a>
              <a
                href={slide.btnLinks.next}
                className="btn btn-circle opacity-60"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainSpecialOffers
