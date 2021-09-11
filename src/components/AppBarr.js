import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const AppBarr = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Menu</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Acteur</Nav.Link>
      <Nav.Link href="#pricing">Singer</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default AppBarr
