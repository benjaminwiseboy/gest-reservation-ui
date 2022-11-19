import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function Navigation() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">GestHebergement</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/clients">Clients</Nav.Link>
            <Nav.Link href="/hebergements">Hébergements</Nav.Link>
            <Nav.Link href="/reservations">Réservations</Nav.Link>
          </Nav>
        </Container>
      </Navbar>  
    </div>
  )
}

export default Navigation