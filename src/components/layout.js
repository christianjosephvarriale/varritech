import React from 'react'
import './base.css'
import Container from './container'
import NavBar from './navbar'
import Footer from './footer'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <NavBar />
        {children}
        <Footer />
      </Container>
    )
  }
}

export default Template
