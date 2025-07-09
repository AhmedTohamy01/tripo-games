import styled from 'styled-components'
import Navbar from '@/components/Navbar/Navbar'
import MainContent from '@/components/MainContent/MainContent'
import AboutTripo from '@/components/AboutTripo/AboutTripo'
import OurGames from '@/components/OurGames/OurGames'
import JoinTeam from '@/components/JoinTeam/JoinTeam'

/*---> Component <---*/
function HomeCompound() {
  return (
    <PageWrapper>
      <Navbar />
      <MainContent />
      <AboutTripo />
      <OurGames />
      <JoinTeam />
    </PageWrapper>
  )
}

/*---> Styles <---*/
const PageWrapper = styled.div`
  /* border: 1px solid yellow; */
`

export default HomeCompound
