import styled from 'styled-components'

import { headerPadding, logoHeight } from './Header/Header.styled'

const Layout = styled.div`
  background: #4776E6;
  background: linear-gradient(to right, #4776E6, #74d274);
`

Layout.MainAndFooterWrapper = styled.div`
  min-height: calc(100vh - ${logoHeight + 2 * headerPadding}px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

Layout.Main = styled.main`
  padding-top: 15px;
  padding-bottom: 15px;
`

export default Layout
