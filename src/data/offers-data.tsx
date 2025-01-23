import Slide from '@/types/slides'

const slides: Slide[] = [
  {
    id: 'slide1',
    bgColor: '#E5FFDE',
    bgImage: '/bc-sale.jpg',
    title: 'Покупайте акционные товары по скидке',
    description: 'И получайте вдвое больше бонусов',
    //   image: "/bc-sale.jpg",
    btnLinks: {
      prev: '#slide4',
      next: '#slide2',
    },
  },
  {
    id: 'slide2',
    bgColor: 'transparent',
    bgImage: '/bc-delivery.jpg',
    title: 'Доставка бесплатно от 1000 ₽',
    description: '',
    // image: '',
    btnLinks: {
      prev: '#slide1',
      next: '#slide3',
    },
  },
  {
    id: 'slide3',
    bgColor: 'bg-orange-100',
    bgImage: '/licruaCard.png',
    title: 'Закажи карту и накапливай бонусы',
    description: '',
    // image: '/licruaCard.png',
    btnLinks: {
      prev: '#slide2',
      next: '#slide1',
    },
  },
]

export default slides
