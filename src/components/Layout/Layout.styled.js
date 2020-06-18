import styled from 'styled-components'

const Layout = styled.div``

const extraSpace = '300'

Layout.Main = styled.main`
  padding-bottom: 15px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: calc(100% - ${extraSpace}px);
    background: #EEF0F8;
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: ${extraSpace}px;
    background: #4776E6;
    background: linear-gradient(to right, #4776E6, #74d274);
    z-index: -1;
  }
`

export default Layout
