import styled from 'styled-components'
import Image from 'next/image'

/*---> Component <---*/
function JoinTeam() {
  return (
    <MainWrapper>
      <TextWrapper>
        <Subtitle>Join Our Team</Subtitle>
        <Title>It takes the world's best talent to change the game.</Title>
        <ExploreButton>Explore Careers</ExploreButton>
      </TextWrapper>
      <ImageWrapper>
        <Image
          src='/images/join-team-img.png'
          width={400}
          height={340}
          alt='join team image'
        />
      </ImageWrapper>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  /* border: 1px solid red; */
  background-image: url('./images/join-team-background.png');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 670px;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding: 0px 50px;
  }

  @media (max-width: 768px) {
    padding: 0px 15px;
  }
`

const Title = styled.div`
  /* border: 1px solid red; */
  font-family: 'Suez';
  font-size: 50px;
  max-width: 720px;
  margin-bottom: 40px;
  color: white;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`

const Subtitle = styled.div`
  font-size: 21px;
  margin-bottom: 20px;
  font-weight: 700;
  margin-top: 50px;
  color: white;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const TextWrapper = styled.div`
  /* border: 1px solid yellow; */
  z-index: 10;
`

const ImageWrapper = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
  justify-content: flex-end;
  margin-top: -150px;
`

const ExploreButton = styled.button`
  width: 142px;
  height: 60px;
  font-size: 16px;
  background: #fcff72;
  color: black;
  border: 1px solid #fcff72;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  transition: 0.5s;

  :hover {
    background: #f6f4f0;
    border: 1px solid #f6f4f0;
    color: #272443;
  }
`

export default JoinTeam
