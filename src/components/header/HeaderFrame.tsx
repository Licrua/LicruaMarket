import ChildrenType from "@/types/children";

export default function HeaderFrame({children}: ChildrenType) {
	return (
		<div className=" border-4 border-indigo-200 border-x-indigo-500   p-1 bg-gray-50  flex-none">
			{children}
		</div>
	)
}