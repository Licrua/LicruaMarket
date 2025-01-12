import Image from 'next/image'

const HeaderLogo = () => {
  return (
      <img src="logo.png" className='min-w-[100px]  mt-5  sm:w-[190px] max-w-[10rem] '  alt="logo" />
  )
}
export default HeaderLogo

{
  /* <Image alt="logo" fill={true} src="/DALL·E 2025-01-10 21.32.10 - A minimalist and modern logo for a website called 'LicruaProductShop'. The design features the text 'LicruaProductShop' in elegant, clean typography. -Photoroom.png"></Image> */
}
