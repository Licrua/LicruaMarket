import roboto from "@/fonts/regular-font";
import ChildrenType from "@/types/children";

export default function Container ({children}: ChildrenType)  {
		return (
		<div className={`container ${roboto.className}  bg-base-100 mx-auto`}>
			{children}
		</div>	
		)
}