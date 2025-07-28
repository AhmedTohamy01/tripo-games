import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'


/*---> Component <---*/
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        {/* Contact */}
        <FooterColumn>
          <FooterTitle>Contact</FooterTitle>
          <FooterTextGroup>
            <FooterText>Info@mysite.com</FooterText>
            <FooterText>Tel: 123-456-7890</FooterText>
            <FooterText>500 Terry Francine St</FooterText>
            <FooterText>San Francisco, CA 94158</FooterText>
          </FooterTextGroup>
        </FooterColumn>
        {/* Navigation */}
        <FooterColumn>
          <FooterTitle>Navigation</FooterTitle>
          <FooterNavGroup>
            <Link href='/games' passHref legacyBehavior>
              <FooterText as='a'>Games</FooterText>
            </Link>
            <Link href='/careers' passHref legacyBehavior>
              <FooterText as='a'>Careers</FooterText>
            </Link>
            <Link href='/about' passHref legacyBehavior>
              <FooterText as='a'>About</FooterText>
            </Link>
            <Link href='/contact' passHref legacyBehavior>
              <FooterText as='a'>Contact</FooterText>
            </Link>
          </FooterNavGroup>
        </FooterColumn>
        {/* Social */}
        <FooterColumn>
          <FooterTitle>Social</FooterTitle>
          <FooterNavGroup>
            <Link href='https://discord.com/' passHref legacyBehavior>
              <FooterText as='a' target='_blank' rel='noopener noreferrer'>
                Discord
              </FooterText>
            </Link>
            <Link href='https://youtube.com/' passHref legacyBehavior>
              <FooterText as='a' target='_blank' rel='noopener noreferrer'>
                YouTube
              </FooterText>
            </Link>
            <Link href='https://facebook.com/' passHref legacyBehavior>
              <FooterText as='a' target='_blank' rel='noopener noreferrer'>
                Facebook
              </FooterText>
            </Link>
            <Link href='https://x.com/' passHref legacyBehavior>
              <FooterText as='a' target='_blank' rel='noopener noreferrer'>
                X
              </FooterText>
            </Link>
          </FooterNavGroup>
        </FooterColumn>
        {/* Find Us On */}
        <FooterColumn>
          <FooterTitle>Find Us On</FooterTitle>
          <StoreBadges>
            <StoreImg src='/images/google-play.png' alt='Google Play' />
            <StoreImg src='/images/app-store.png' alt='App Store' />
          </StoreBadges>
        </FooterColumn>
      </FooterContainer>
      <CopyrightBar>
        TRIPO GAMES, INC. © {new Date().getFullYear()} ALL RIGHTS RESERVED
      </CopyrightBar>
    </FooterWrapper>
  )
}


/*---> Styles <---*/
const FooterWrapper = styled.footer`
  border-top: 1px solid #e0e0e0;
  padding: 3rem 0 1.5rem 0;
  font-family: 'Inter', sans-serif;
  background: #f6f4f0;
`

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 2rem;
`

const FooterColumn = styled.div`
  min-width: 200px;
  margin-bottom: 32px;
`

const FooterTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 16px;
`

const FooterTextGroup = styled.div`
  color: #555;
  font-size: 15px;
  line-height: 1.8;
`

const FooterNavGroup = styled.div`
  color: #555;
  font-size: 15px;
  line-height: 1.8;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const FooterText = styled.div``

const StoreBadges = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const StoreImg = styled.img`
  width: 140px;
  height: auto;
  cursor: pointer;
`

const CopyrightBar = styled.div`
  border-top: 1px solid #e0e0e0;
  margin-top: 32px;
  padding-top: 16px;
  text-align: center;
  color: #888;
  font-size: 14px;
`

const CopyrightLink = styled.a`
  color: #888;
  text-decoration: underline;
`

export default Footer
