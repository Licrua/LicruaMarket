import locations from "@/data/locations"

interface PickupLocationSelectorProps {
	pickupLocation: string
	setPickupLocation: (location: string) => void
  }
  

  
  const PickupLocationSelector = ({
	pickupLocation,
	setPickupLocation,
  }: PickupLocationSelectorProps) => (
	<div className="mt-4 flex flex-col space-y-4">
	  {locations.map((location) => (
		<label
		  key={location.id}
		  className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200"
		>
		  <input
			type="radio"
			name="pickupLocation"
			value={location.label}
			checked={pickupLocation === location.label}
			onChange={(e) => setPickupLocation(e.target.value)}
			className="form-radio h-5 w-5 text-blue-600"
		  />
		  <span className="ml-3 text-lg font-medium">{location.label}</span>
		</label>
	  ))}
	</div>
  )
  
  export default PickupLocationSelector
  