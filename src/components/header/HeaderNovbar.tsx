import ChildrenType from "@/types/children";

function HeaderNovbar({children}: ChildrenType) {
	return (  
		<div className="navbar border-b-2 border-indigo-600 max-h-[80px] pr-20  justify-between bg-base-100">
		{children}
		</div>
	);
}

export default HeaderNovbar;