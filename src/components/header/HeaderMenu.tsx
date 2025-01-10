

import menuItems from "@/data/header-menu";


const HeaderMenu = () => (
	<ul className="menu menu-horizontal bg-base-200 text-center rounded-box">
	  {menuItems.map((item, index) => (
		<li key={index}>
		  <a>{item.icon}</a>
		</li>
	  ))}
	</ul>
  );
  
  export default HeaderMenu;