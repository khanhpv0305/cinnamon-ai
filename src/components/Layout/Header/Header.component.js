import React from 'react'
import { Container } from 'reactstrap'

// Components
import Header from './Header.styled'

// Images
import Logo from '../../../static/logo.png'

const HeaderComponent = () => (
  <Header>
    <Container>
      <Header.ContentWrapper>
        <Header.Logo src={Logo} alt='Cinnamon AI logo' />

        <Header.Nav>
          <Header.NavItem href='#' className='active'>Nav 1</Header.NavItem>
          <Header.NavItem href='#'>Nav 2</Header.NavItem>
          <Header.NavItem href='#'>Nav 3</Header.NavItem>
        </Header.Nav>
      </Header.ContentWrapper>
    </Container>
  </Header>
)

export default HeaderComponent
