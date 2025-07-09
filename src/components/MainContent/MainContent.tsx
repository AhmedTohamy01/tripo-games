import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

/*---> Component <---*/
export const MainContent = () => {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // Image width is 1621px, subtract current viewport width
      const imageWidth = 1621
      const screenWidth = window.innerWidth
      const maxScrollX = Math.max(0, imageWidth - screenWidth)

      // Scroll left, but don't go beyond image edge
      const offsetX = Math.min(scrollY * 0.5, maxScrollX)

      if (backgroundRef.current) {
        backgroundRef.current.style.backgroundPosition = `-${offsetX}px center`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <MainWrapper
      ref={backgroundRef}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
    >
      <ContentWrapper>
        <Title>Made to Be Played</Title>
        <Subtitle>The Very Best in Mobile Gaming</Subtitle>
        <AppStoesWrapper>
          <AppleStore src={'/images/app-store.png'} alt={'App Store Logo'} />
          <GooglePlayStore
            src={'/images/google-play.png'}
            alt={'Google Play Logo'}
          />
        </AppStoesWrapper>
      </ContentWrapper>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  border: 1px solid transparent;
  background-image: url('/images/main-background.jpg');
  background-repeat: no-repeat;
  background-position: 0 center;
  background-size: cover;
  height: 800px;
  margin-top: -60px;
  position: relative;
  overflow: hidden;
  z-index: 0;

  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`

const ContentWrapper = styled.div`
  margin: 170px 0px 0px 100px;

  @media (max-width: 1024px) {
    margin: 100px 0px 0px 40px;
  }

  @media (max-width: 768px) {
    margin: 100px 0px 0px 20px;
  }
`

const Title = styled.p`
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
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const AppStoesWrapper = styled.div``

const AppleStore = styled.img`
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
  margin-right: 20px;
  cursor: pointer;
  width: 137px;
  height: 40px;

  @media (max-width: 768px) {
    width: 117px;
    height: 35px;
  }
`
