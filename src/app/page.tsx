// import { Main } from "next/document";

import FooterContainer from '@/components/footer/FooterContainer'
import MapComponent from '@/components/generalComponents/MapComponent'
import Mapper from '@/components/generalComponents/Mapper'
import MainContainer from '@/components/main/Main'
import MainIntro from '@/components/main/MainInto'
import MainNavigation from '@/components/main/MainNavigation'
import MainNewCards from '@/components/main/MainNewCards'
import MainSaleCards from '@/components/main/MainSaleCards'
import MainSalesHit from '@/components/main/MainSalesHit'
import MainSpecialOffers from '@/components/main/MainSpecialOffers'
import Head from 'next/head'

function Home() {
  return (
    <>
      <Head>
        <title>LicruaShop</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </Head>
      <MainContainer>
        <MainIntro />
        <MainNavigation />
        <MainSaleCards />
        <MainNewCards />
        <MainSalesHit />
        <MainSpecialOffers />
        {/* <MapComponent /> */}
        <Mapper />
      </MainContainer>
      <FooterContainer />
    </>
  )
}
export default Home
