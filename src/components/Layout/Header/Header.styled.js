import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background: white;
`

Header.ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
`

Header.Logo = styled.img`
  height: 50px;
  margin-right: 15px;
`

Header.Separator = styled(
  ({ className }) => (
    <div {...{ className }}>
      <div />
    </div>
  )
)`
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;

  > div {
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
  }
`

export default Header
