import ChildrenType from "@/types/children";

function HeaderDropDown({
	children,
  }: ChildrenType) {
	return ( 
		<div className="dropdown dropdown-end">
			{children}
	  </div>
	 );
}


export default HeaderDropDown;