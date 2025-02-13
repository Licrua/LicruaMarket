interface DeliveryMethodSelectorProps {
  deliveryMethod: string | null
  setDeliveryMethod: (method: "pickup" | "courier") => void
}

const DeliveryMethodSelector = ({
  deliveryMethod,
  setDeliveryMethod,
}: DeliveryMethodSelectorProps) => (
  <div className="form-control">
    <label className="label">
      <span className="label-text">Способ доставки</span>
    </label>
    <div className="space-y-2">
      <div className="flex items-center">
        <input
          type="radio"
          id="pickup"
          name="deliveryMethod"
          value="pickup"
          checked={deliveryMethod === 'pickup'}
          onChange={() => setDeliveryMethod('pickup')}
          className="radio radio-primary"
        />
        <label htmlFor="pickup" className="ml-2 text-lg">
          Самовывоз
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="courier"
          name="deliveryMethod"
          value="courier"
          checked={deliveryMethod === 'courier'}
          onChange={() => setDeliveryMethod('courier')}
          className="radio radio-primary"
        />
        <label htmlFor="courier" className="ml-2 text-lg">
          Доставка курьером
        </label>
      </div>
    </div>
  </div>
)

export default DeliveryMethodSelector
