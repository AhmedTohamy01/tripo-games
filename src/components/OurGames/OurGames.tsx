import styled from 'styled-components'
import GameCard from '../GameCard/GameCard'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/*---> Component <---*/
function OurGames() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <MainWrapper>
      <TextWrapper
        ref={ref}
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <Title>Our Games</Title>
        <Text>
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you.
        </Text>
      </TextWrapper>
      <ContentWrapper>
        <FirstRowGames>
          <GameCard
            imageUrl={'/images/kipon-icon.png'}
            name={'Kipon'}
            category={'Casual - Free'}
            description={`I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.`}
          />
          <GameCard
            imageUrl={'/images/robotrix-icon.png'}
            name={'Robotrix'}
            category={'RPG - Free'}
            description={`I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.`}
          />
        </FirstRowGames>
        <SecondRowGames>
          <GameCard
            imageUrl={'/images/treasure-box-icon.png'}
            name={'Treasure Box'}
            category={'Adventure - Free'}
            description={`I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.`}
          />
          <OurGamesIconWrapper>
            <OurGamesIcon
              src={'/images/games-icon.png'}
              alt={'Games Icon'}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
          </OurGamesIconWrapper>
        </SecondRowGames>
      </ContentWrapper>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  /* border: 1px solid blue; */
  background: #f6f4f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 100px 0px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0px 15px;
    margin-top: -50px;
  }
`

const TextWrapper = styled(motion.div)`
  /* border: 1px solid red; */
  margin-bottom: 100px;

  @media (max-width: 480px) {
    margin-bottom: 50px;
  }
`

const ContentWrapper = styled(motion.div)`
  /* border: 1px solid blue; */
  background-image: url('/images/games-bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: fit-content;
  min-height: 1300px;
  max-width: 1800px;
`

const Title = styled.div`
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

const Text = styled.div`
  /* border: 1px solid red; */
  font-size: 18px;
  margin-bottom: 40px;
  max-width: 720px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const FirstRowGames = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  z-index: 100;
  padding: 0px 160px;
  margin-bottom: 450px;

  @media (max-width: 1150px) {
    flex-direction: column;
    gap: 30px;
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;
  }
`

const SecondRowGames = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
  justify-content: space-between;
  z-index: 100;
  padding: 0px 160px;

  @media (max-width: 1150px) {
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
  }
`

const OurGamesIconWrapper = styled.div`
  /* border: 1px solid yellow; */
  height: 390px;
  width: 390px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const OurGamesIcon = styled(motion.img)`
  /* border: 1px solid red; */
  width: 275px;
  height: 300px;
`

export default OurGames
