import styled from 'styled-components'
import { Navbar } from '@/components/Navbar/Navbar'
import { MainContent } from '@/components/MainContent/MainContent'
import { AboutTripo } from '@/components/AboutTripo/AboutTripo'
import { OurGames } from '@/components/OurGames/OurGames'

/*---> Component <---*/
export const HomeCompound = () => {
  return (
    <PageWrapper>
      <Navbar />
      <MainContent />
      <AboutTripo />
      <OurGames />
    </PageWrapper>
  )
}

/*---> Styles <---*/
const PageWrapper = styled.div`
  /* border: 1px solid yellow; */
`
