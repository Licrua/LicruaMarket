import slides from '@/data/offers-data'
import playfairDisplay from '@/fonts/header-font'

function MainSpecialOffers() {
  return (
    <div className="flex p-5 justify-center">
      <div className="carousel w-full border-3 shadow-xl min-h-[300px] flex">
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
            {/* Затемняющий слой */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Контейнер для текста */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h2
                className={`${playfairDisplay.className} text-white text-3xl font-extrabold tracking-widest leading-tight drop-shadow-md`}
              >
                {slide.title}
              </h2>
            </div>

            {/* Кнопки переключения */}
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

export default MainSpecialOffers;