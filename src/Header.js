import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand>
          <h2 className="text-danger"><i class="fa-solid fa-utensils fa-bounce me-3" style={{color: "#ffffff;"}}></i>Chops & Hops</h2></Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header