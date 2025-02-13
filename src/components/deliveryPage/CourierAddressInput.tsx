import AddressAutocomplete from "./AddressAutocomplete"

interface CourierAddressInputProps {
	setDeliveryAddress: (address: string) => void
  }
  
  const CourierAddressInput = ({ setDeliveryAddress }: CourierAddressInputProps) => (
	<div className="mt-4">
	  <AddressAutocomplete onSelect={setDeliveryAddress} />
	</div>
  )
  
  export default CourierAddressInput
  