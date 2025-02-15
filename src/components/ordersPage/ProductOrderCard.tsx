function ProductOrderCard({
  product,
}: {
  product: { productName: string; quantity: number; productImage: string }
}) {
  return (
    <div className="min-w-[150px] bg-gray-100 p-4 rounded-lg shadow-md border border-gray-300">
      <img
        src={product.productImage}
        alt={product.productName}
        className="w-full h-24 object-cover rounded-md"
      />
      <p className="text-sm font-medium mt-2">{product.productName}</p>
      <p className="text-xs text-gray-600">Кол-во: {product.quantity} шт.</p>
    </div>
  )
}
export default ProductOrderCard
