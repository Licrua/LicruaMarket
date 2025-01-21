interface BtnLinks {
	prev: string; // Ссылка на предыдущий слайд
	next: string; // Ссылка на следующий слайд
  }
  
  export default interface Slide {
	id: string;         // Уникальный идентификатор слайда
	bgColor: string;    // Цвет фона слайда
	bgImage?: string;   // Изображение фона (необязательно)
	title: string;      // Заголовок слайда
	description: string; // Описание слайда
	image: string;      // Изображение слайда
	btnLinks: BtnLinks; // Объект с ссылками на предыдущий и следующий слайды
  }