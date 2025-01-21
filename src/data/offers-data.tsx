import Slide from "@/types/slides";

const slides: Slide[] = [
    {
      id: "slide1",
      bgColor: "#E5FFDE",
      title: "Покупайте акционные товары",
      description: "И получайте вдвое больше бонусов",
      image: "/cart.png",
      btnLinks: {
        prev: "#slide4",
        next: "#slide2"
      }
    },
    {
      id: "slide2",
      bgColor: "transparent",
      bgImage: "https://png.pngtree.com/thumb_back/fh260/back_our/20190614/ourmid/pngtree-happy-shopping-light-spot-poster-background-image_122448.jpg",
      title: "Доставка бесплатно от 1000 ₽",
      description: "",
      image: "",
      btnLinks: {
        prev: "#slide1",
        next: "#slide3"
      }
    },
    {
      id: "slide3",
      bgColor: "bg-orange-100",
      title: "Закажи карту и накапливай бонусы",
      description: "",
      image: "/licruaCard.png",
      btnLinks: {
        prev: "#slide2",
        next: "#slide1"
      }
    }
  ];

  export default slides;