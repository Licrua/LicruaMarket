interface cardProduct {
  id: string // Уникальный идентификатор записи о покупке
  userId?: string // Идентификатор пользователя (опционально)
  productId?: string // Уникальный идентификатор товара (опционально)
  productName: string // Название товара
  productCategory?: string // Категория товара (опционально)
  productImage?: string // URL изображения товара (опционально)
  productOldprice?: number // Старая цена товара (опционально)
  productPrice?: number
}
export default cardProduct
