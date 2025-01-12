import playfairDisplay from "@/fonts/header-font";

function MainIntro() {
	return (
	  <div className="relative hero bg-mii bg-bottom  bg-cover saturate-200 bg-no-repeat bg-fixed min-h-[400px]">
		<div className="absolute inset-0 bg-black bg-opacity-50 contrast-50"></div>
		<div className="relative hero-content text-center  text-white">
		  <div className="max-w-md">
			<h1 className={`text-5xl italic tracing-wide ${playfairDisplay.className} font-bold`}>Ваш идеальный выбор — наш магазин</h1>
			<ul className="grid grid-cols-2 mt-5 gap-4 text-left text-lg">
			  <li className="flex items-center">
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  className="h-6 w-6 text-green-500 mr-2"
				  viewBox="0 0 24 24"
				  fill="currentColor"
				>
				  <path d="M9 21L1 13l2-2 6 6 12-12 2 2L9 21z" />
				</svg>
				Высокое качество
			  </li>
			  <li className="flex items-center">
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  className="h-6 w-6 text-green-500 mr-2"
				  viewBox="0 0 24 24"
				  fill="currentColor"
				>
				  <path d="M9 21L1 13l2-2 6 6 12-12 2 2L9 21z" />
				</svg>
				Доступные цены
			  </li>
			  <li className="flex items-center">
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  className="h-6 w-6 text-green-500 mr-2"
				  viewBox="0 0 24 24"
				  fill="currentColor"
				>
				  <path d="M9 21L1 13l2-2 6 6 12-12 2 2L9 21z" />
				</svg>
				Быстрая доставка
			  </li>
			  <li className="flex items-center">
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  className="h-6 w-6 text-green-500 mr-2"
				  viewBox="0 0 24 24"
				  fill="currentColor"
				>
				  <path d="M9 21L1 13l2-2 6 6 12-12 2 2L9 21z" />
				</svg>
				Отличное обслуживание
			  </li>
			</ul>
		  </div>
		</div>
	  </div>
	);
  }
  
export default MainIntro;