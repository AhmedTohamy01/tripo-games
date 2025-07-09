import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

/*---> Component <---*/
function Navbar() {
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <MainWrapper
      scrollY={scrollY}
      ref={ref}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
    >
      <Logo>Tripo Games</Logo>
      <NavLinksWrapper>
        <HomeLink>Home</HomeLink>
        <OtherLink>Games</OtherLink>
        <OtherLink>Careers</OtherLink>
        <OtherLink>About</OtherLink>
        <ContactLink>Contact</ContactLink>
      </NavLinksWrapper>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div<{ scrollY: number }>`
  /* border: 1px solid red; */
  height: 60px;
  padding: 0px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: transparent;

  /* Fade-out and slide effect */
  opacity: ${({ scrollY }) => (scrollY > 100 ? 0 : 1)};
  transform: ${({ scrollY }) =>
    scrollY > 100 ? 'translateY(-20px)' : 'translateY(0)'};
  transition: opacity 0.5s ease, transform 0.5s ease;

  @media (max-width: 1024px) {
    padding: 0px 40px;
  }

  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`

const Logo = styled.div`
  /* border: 1px solid red; */
  width: 170px;
  background: #da392b;
  font-family: 'Kaushan';
  font-size: 26px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 0px 0px 10px 10px;
`

const NavLinksWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`

const HomeLink = styled.div`
  color: white;
  background: #da392b;
  border-radius: 0px 0px 0px 10px;
  width: 105px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const OtherLink = styled.div`
  background: white;
  width: 105px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    background: #da392b;
    color: white;
    transition-duration: 0.5s;
  }
`

const ContactLink = styled.div`
  background: white;
  width: 105px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 0px 0px 10px 0px;

  :hover {
    background: #da392b;
    color: white;
    transition: 0.5s;
  }
`

export default Navbar
