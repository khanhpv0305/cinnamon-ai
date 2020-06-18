import React from 'react'

import Layout from './Layout.styled'
import Header from './Header'
import Footer from './Footer'

const LayoutComponent = ({ children, ...restProps }) => (
  <Layout {...restProps}>
    <Header />

    <Layout.Main>
      {children}
    </Layout.Main>

    <Footer />
  </Layout>
)

export default LayoutComponent
