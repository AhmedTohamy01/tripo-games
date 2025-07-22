import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { MenuOutlined } from '@ant-design/icons'
import { CloseOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { Button } from 'antd'

/*---> Component <---*/
function Navbar() {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const ref = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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
      <MobileMenuWrapper onClick={toggleMenu}>
        <StyledMenuIcon />
      </MobileMenuWrapper>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenuOverlay
            ref={menuRef}
            as={motion.div}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={(e: { target: any; currentTarget: any }) => {
              if (e.target === e.currentTarget) {
                setIsMenuOpen(false)
              }
            }}
          >
            <MobileMenuContent>
              <MobileMenuHeader>
                <Link href={'/'} onClick={() => setIsMenuOpen(false)}>
                  <Logo>Tripo Games</Logo>
                </Link>
                <CloseButton onClick={toggleMenu}>
                  <CloseOutlined />
                </CloseButton>
              </MobileMenuHeader>
              <MobileNavLinks>
                <MobileNavLink onClick={() => setIsMenuOpen(false)}>
                  Games
                </MobileNavLink>
                <MobileNavLink onClick={() => setIsMenuOpen(false)}>
                  Careers
                </MobileNavLink>
                <MobileNavLink onClick={() => setIsMenuOpen(false)}>
                  About
                </MobileNavLink>
                <MobileNavLink onClick={() => setIsMenuOpen(false)}>
                  Contact
                </MobileNavLink>
              </MobileNavLinks>
            </MobileMenuContent>
          </MobileMenuOverlay>
        )}
      </AnimatePresence>
    </MainWrapper>
  )
}

const MobileMenuWrapper = styled.div`
  /* border: 1px solid blue; */
  background-color: white;
  display: none;
  width: fit-content;
  height: 100%;
  border-radius: 0px 0px 10px 10px;
  padding: 0px 20px;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const StyledMenuIcon = styled(MenuOutlined)`
  /* border: 1px solid red; */
  font-size: 30px;
  color: #da392b;
`

const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1000;
  backdrop-filter: blur(4px);

  @media (min-width: 1151px) {
    display: none;
  }
`

const MobileMenuContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #222;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  .anticon-close {
    font-size: 22px;
    vertical-align: middle;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }
`

const MobileNavLinks = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
  margin-top: -20px;
`

const MobileNavLink = styled.div`
  /* border: 1px solid red; */
  color: #222;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  padding: 12px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  transition: color 0.3s ease;

  &:hover {
    color: #da392b;
  }
`

const MobilePhoneSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`

const MobileLoginButton = styled(Button)`
  background: linear-gradient(to bottom, #044f71, #0075aa) !important;
  color: #ffffff !important;
  border: none;
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 28px;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.15);
  transition: box-shadow 0.3s ease;

  &:hover,
  &:focus {
    filter: brightness(0.92);
    color: #ffffff !important;
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.25);
  }
`

const LogoText = styled.span`
  font-size: 2.2rem;
  letter-spacing: 0.05em;
  font-weight: 400;
  line-height: 1;
  display: flex;
  align-items: center;
  background: linear-gradient(to bottom, #044f71, #0075aa);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`

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
