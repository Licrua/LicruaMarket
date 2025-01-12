// import { Main } from "next/document";

import MainContainer from '@/components/main/Main'
import MainIntro from '@/components/main/MainInto'
import MainNavigation from '@/components/main/MainNavigation'

const Home = () => {
  return (
    <>
      <MainContainer>
        <MainIntro />
        <MainNavigation />
      </MainContainer>
    </>
  )
}
export default Home
