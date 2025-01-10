import ChildrenType from "@/types/children";

export default function Container ({children}: ChildrenType)  {
		return (
		<div className="container mx-auto">
			{children}
		</div>	
		)
}