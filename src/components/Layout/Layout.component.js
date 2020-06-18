import React from 'react'

import Layout from './Layout.styled'
import Header from './Header'
import Footer from './Footer'

const LayoutComponent = ({ children, ...restProps }) => (
  <Layout {...restProps}>
    <Header />

    <Layout.MainAndFooterWrapper>
      <Layout.Main>
        {children}
      </Layout.Main>

      <Footer />
    </Layout.MainAndFooterWrapper>
  </Layout>
)

export default LayoutComponent
