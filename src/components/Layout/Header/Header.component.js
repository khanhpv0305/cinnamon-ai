import React from 'react'
import { Container } from 'reactstrap'

// Components
import Header from './Header.styled'

// Images
import Logo from '../../../static/logo.png'

const HeaderComponent = () => (
  <Header>
    <Header.ContentWrapper>
      <Container>
        <Header.Logo src={Logo} alt='Cinnamon AI logo' />
      </Container>
    </Header.ContentWrapper>

    <Header.Separator />
  </Header>
)

export default HeaderComponent
