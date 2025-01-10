import ChildrenType from "@/types/children";

function HeaderNovbar({children}: ChildrenType) {
	return (  
		<div className="navbar border-b border-indigo-600  justify-between bg-base-100">
		{children}
		</div>
	);
}

export default HeaderNovbar;