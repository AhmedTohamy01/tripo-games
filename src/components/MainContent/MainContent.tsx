import styled from 'styled-components'

/*---> Component <---*/
export const MainContent = () => {
  return (
    <MainWrapper>
      <ContentWrapper>
        <Title>Made to Be Played</Title>
        <Subtitle>The Very Best in Mobile Gaming</Subtitle>
        <AppStoesWrapper>
          <AppleStore src={'/images/app-store.png'} alt={'App Store Logo'} />
          <GooglePlayStore src={'/images/google-play.png'} alt={'Google Play Logo'} />
        </AppStoesWrapper>
      </ContentWrapper>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  border: 1px solid transparent;
  // border: 1px solid red;

  background-image: url('/images/main-background.jpg');
  background-repeat: no-repeat;
  background-position: center;
  height: 800px;
  margin-top: -60px;
  background-size: cover;

  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`

const ContentWrapper = styled.div`
  /* border: 1px solid yellow; */
  margin: 170px 0px 0px 100px;

  @media (max-width: 1024px) {
    margin: 100px 0px 0px 40px;
  }

  @media (max-width: 768px) {
    margin: 100px 0px 0px 20px;
  }
`

const Title = styled.p`
  /* border: 1px solid red; */
  font-family: 'Suez';
  font-size: 80px;

  @media (max-width: 1024px) {
    font-size: 50px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
`

const Subtitle = styled.p`
  /* border: 1px solid red; */
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const AppStoesWrapper = styled.div`
  /* border: 1px solid red; */
`

const AppleStore = styled.img`
  /* border: 1px solid red; */
  margin-right: 20px;
  cursor: pointer;
  width: 120px;
  height: 40px;

  @media (max-width: 768px) {
    width: 105px;
    height: 35px;
  }
`

const GooglePlayStore = styled.img`
  /* border: 1px solid red; */
  margin-right: 20px;
  cursor: pointer;
  width: 137px;
  height: 40px;

  @media (max-width: 768px) {
    width: 117px;
    height: 35px;
  }
`
