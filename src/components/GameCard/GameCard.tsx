import styled from 'styled-components'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/*---> Types <---*/
type PropsType = {
  imageUrl: string
  name: string
  category: string
  description: string
}

/*---> Component <---*/
function GameCard({ imageUrl, name, category, description }: PropsType) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <MainWrapper
      ref={ref}
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2, ease: 'easeOut' }}
    >
      <CardHeader>
        <GameIcon imageUrl={imageUrl} />
        <NameCategoryWrapper>
          <Name>{name}</Name>
          <Category>{category}</Category>
        </NameCategoryWrapper>
      </CardHeader>
      <CardBody>{description}</CardBody>
      <CardFooter>
        <AppStoreIcon src={'/images/app-store.png'} alt={'Apple Store Icon'} />
        <GooglePlayIcon
          src={'/images/google-play.png'}
          alt={'Google Play Icon'}
        />
      </CardFooter>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled(motion.div)`
  /* border: 1px solid red; */
  width: 390px;
  border-radius: 20px;
  background: white;
  padding: 50px;

  @media (max-width: 480px) {
    width: fit-content;
    padding: 20px;
  }
`

const CardHeader = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

const GameIcon = styled.div<{
  imageUrl: string
}>`
  border: 7px solid white;
  width: 90px;
  height: 90px;
  border-radius: 20px;
  background: ${(props) => `url(${props.imageUrl})`};
  background-position: center;
  background-size: contain;
  box-shadow: 7.07px 7.07px 10px 0px rgba(237, 75, 64, 0.1);
  margin-right: 20px;
  cursor: pointer;
`

const NameCategoryWrapper = styled.div`
  /* border: 1px solid red; */
`

const Name = styled.div`
  /* border: 1px solid red; */
  font-size: 21px;
  font-weight: 700;
`

const Category = styled.div`
  /* border: 1px solid red; */
`

const CardBody = styled.div`
  /* border: 1px solid red; */
  margin-bottom: 30px;
`

const CardFooter = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`

const AppStoreIcon = styled.img`
  /* border: 1px solid red; */
  cursor: pointer;
`

const GooglePlayIcon = styled.img`
  /* border: 1px solid red; */
  cursor: pointer;
`

export default GameCard
