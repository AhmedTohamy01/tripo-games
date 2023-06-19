import styled from 'styled-components'

/*---> Component <---*/
export const AboutTripo = () => {
  return (
    <MainWrapper>
      <Subtitle>About Tripo</Subtitle>
      <Title>Your Source for Mobile Entertainment</Title>
      <Text>
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. I’m a great place for you to tell a story and
        let your users know a little more about you.
      </Text>
      <LearnMoreButton>Learn More</LearnMoreButton>
      <AboutTripoImage
        src={'/images/game-designers.png'}
        alt={'Game Designers'}
      />
      <AboutTripoToyImage
        src={'/images/game-designers-toy.png'}
        alt={'Game Designers Toy'}
      />
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  /* border: 1px solid red; */
  background: #f6f4f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0px 15px;
  }
`

const Title = styled.p`
  /* border: 1px solid red; */
  font-family: 'Suez';
  font-size: 50px;
  max-width: 720px;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`

const Subtitle = styled.p`
  /* border: 1px solid red; */
  font-size: 21px;
  margin-bottom: 20px;
  font-weight: 700;
  margin-top: 50px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Text = styled.p`
  /* border: 1px solid red; */
  font-size: 18px;
  margin-bottom: 40px;
  max-width: 720px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const LearnMoreButton = styled.button`
  width: 142px;
  height: 60px;
  font-size: 16px;
  background: #da392b;
  color: #f6f4f0;
  border: 1px solid #da392b;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  transition: 0.5s;
  margin-bottom: 40px;

  :hover {
    background: #f6f4f0;
    border: 1px solid #272443;
    color: #272443;
  }
`

const AboutTripoImage = styled.img`
  /* border: 1px solid red; */
  border-radius: 20px;
  /* margin-bottom: 70px; */
  width: 695px;
  height: 395px;

  :hover {
    opacity: 0.8;
    transition: 0.5s;
  }

  @media (max-width: 768px) {
    width: 95%;
    height: auto;
  }
`

const AboutTripoToyImage = styled.img`
  /* border: 1px solid red; */
  border-radius: 20px;
  margin-bottom: 70px;
  width: 229px;
  height: 246px;
  margin-top: -200px;
  margin-left: -650px;
  z-index: 100;

  @media (max-width: 1024px) {
    margin-top: -100px;
    margin-left: initial;
  }

  @media (max-width: 768px) {
    margin-top: -70px;
    width: 160px;
    height: 176px;
  }
`
