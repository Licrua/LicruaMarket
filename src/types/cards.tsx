type PromoProduct =  {
	id: number;
	name: string;
	oldPrice: number;
	currentPrice: number;
	image: string;
	category: string;
  }[];

 export type newProducts = {
	id: number;
	name: string; 
	currentPrice: number;
	image: string;
	category: string
  }[]

  export default PromoProduct;
  
//   export default interface PromoProductsData {
// 	promoProducts: PromoProduct[];
//   }
  