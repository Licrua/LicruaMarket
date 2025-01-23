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
            className="carousel-item relative overflow-hidden bg-black/20 bg-center bg-no-repeat justify-center items-center w-full py-10"
            style={
              slide.bgImage
                ? {
                    backgroundImage: `url(${slide.bgImage})`,
                    backgroundSize: 'cover',
                  }
                : {}
            }
          >
            {/* Контейнер для выравнивания содержимого */}
            <div className="absolute inset-1/2 max-w-[200px] flex flex-col items-center justify-center">
              <h2
                className={`${playfairDisplay.className} tracking-widest leading-tight text-center text-3xl font-extrabold text-white`}
              >
                {slide.title}
              </h2>
             
            </div>
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
