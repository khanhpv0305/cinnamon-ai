import styled from 'styled-components'

const Header = styled.header`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`

export const headerPadding = 15

Header.ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${headerPadding}px 0;
  position: relative;
`

export const logoHeight = 50

Header.Logo = styled.img`
  height: ${logoHeight}px;
  margin-right: 15px;
`

Header.Nav = styled.nav``

Header.NavItem = styled.a`
  color: white;
  padding: 7px 16px;
  transition: all 0.2s;
  border-radius: 5px;
  
  &:hover, &.active {
    background: rgba(255, 255, 255, 0.3);
  }

  &:hover {
    color: white;
    text-decoration: none;
  }

  &:not(:last-child) {
    margin-right: 5px;
  }
`

export default Header
