import styled from 'styled-components'

/*---> Component <---*/
export const Navbar = () => {
  return (
    <MainWrapper>
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
const MainWrapper = styled.div`
  /* border: 1px solid red; */
  height: 60px;
  padding: 0px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
  /* border: 1px solid red; */
  /* width: 50%; */
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`

const HomeLink = styled.div`
  /* border: 1px solid yellow; */
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
  /* border: 1px solid yellow; */
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
  /* border: 1px solid yellow; */
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

