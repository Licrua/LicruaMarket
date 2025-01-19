const slides = [
    {
      id: "slide1",
      bgColor: "#E5FFDE",
      title: "Покупайте акционные товары",
      description: "И получайте вдвое больше бонусов",
      image: "/cart.png",
      imgStyles: "absolute min-w-[200px] opacity-60 inset-x-2/4 inset-y-2/4 top-20 min-h-[210px]",
      textColor: "text-black",
      positions: [
        { top: "10%", left: "20%" },
        { top: "30%", left: "50%" },
        { top: "50%", left: "80%" }
      ],
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
      imgStyles: "",
      textColor: "text-white",
      positions: [],
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
      imgStyles: "opacity-60 min-w-full inset-2/4",
      textColor: "text-black",
      positions: [],
      btnLinks: {
        prev: "#slide2",
        next: "#slide1"
      }
    }
  ];