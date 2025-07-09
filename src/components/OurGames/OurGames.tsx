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
        initial={{ opacity: 0 }}
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
      <OurGamesMainImage
        src={'/images/games-bg.png'}
        alt={'Our Games Background'}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 3, ease: 'easeOut' }}
      />
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
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
        </OurGamesIconWrapper>
      </SecondRowGames>
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
  padding: 50px 0px 200px 0px;

  @media (max-width: 768px) {
    padding: 0px 15px;
  }
`

const TextWrapper = styled(motion.div)`
  /* border: 1px solid red; */
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
  /* border: 1px solid yellow; */
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-bottom: -400px;
  z-index: 100;
`

const SecondRowGames = styled.div`
  /* border: 1px solid yellow; */
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-top: -400px;
  z-index: 100;
`

const OurGamesMainImage = styled(motion.img)`
  /* border: 1px solid red; */
  z-index: 1;
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
