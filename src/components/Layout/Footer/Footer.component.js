import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Footer from './Footer.styled'

const FooterComponent = () => (
  <Footer>
    <Container>
      <Footer.ContentWrapper>
        <Row>
          <Col xs={6}>
            <Footer.Copyright>2020 &copy; Cinnamon AI</Footer.Copyright>
          </Col>

          <Col xs={6}>At Cinnamon we are working to make a world where human creativity can flourish by using our AI technology to replace all the repetitive, mind-numbing tasks that take place today</Col>
        </Row>
      </Footer.ContentWrapper>
    </Container>
  </Footer>
)

export default FooterComponent
