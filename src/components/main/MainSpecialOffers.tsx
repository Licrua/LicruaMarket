function MainSpecialOffers() {
	return ( 
		<div className="carousel  w-full">
  <div id="slide1" className="carousel-item relative p-5 bg-[#E5FFDE] w-full">
	<div className="flex flex-col gap-5 p-1">
		<h1 className="font-bold text-2xl">Покупайте акционные товары</h1>
		<p>И получайте вдвое больше бонусов</p>
	</div>
		<img src="/cart.png" alt="cart" />
		<span className="font-bold text-4xl text-red-500 absolute opacity-80 inset-1">+</span>
		<span className="font-bold text-4xl text-red-500 absolute opacity-80 bottom-1 left-1">+</span>
		<span className="font-bold text-4xl text-red-500 absolute opacity-80 top-1 right-1">+</span>
		<span className="font-bold text-4xl text-red-500 absolute opacity-80 bottom-1 right-1">+</span>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle opacity-60">❮</a>
      <a href="#slide2" className="btn btn-circle opacity-60">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
	 );
}

export default MainSpecialOffers;