// import { Main } from "next/document";

import MainContainer from '@/components/main/Main'
import MainIntro from '@/components/main/MainInto'
import MainNavigation from '@/components/main/MainNavigation'
import MainNewCards from '@/components/main/MainNewCards'
import MainSaleCards from '@/components/main/MainSaleCards'
import MainSalesHit from '@/components/main/MainSalesHit'
import MainSpecialOffers from '@/components/main/MainSpecialOffers'

function Home() {
  return (
    <>
      <MainContainer>
        <MainIntro />
        <MainNavigation />
        <MainSaleCards />
        <MainNewCards />
        <MainSalesHit />
        <MainSpecialOffers />
      </MainContainer>
    </>
  )
}
export default Home
