import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Home, Quote, BookOpen, Camera, Users, Brain } from 'lucide-react';

function Navigation() {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">Mouwadji_Univers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              <Home className="me-1" size={18} />
              Présentation
            </Nav.Link>
            <Nav.Link as={Link} to="/citations">
              <Quote className="me-1" size={18} />
              Citations
            </Nav.Link>
            <Nav.Link as={Link} to="/poemes">
              <BookOpen className="me-1" size={18} />
              Poèmes
            </Nav.Link>
            <Nav.Link as={Link} to="/photos-aventures">
              <Camera className="me-1" size={18} />
              Photos et Aventures
            </Nav.Link>
            <Nav.Link as={Link} to="/personnages-idoles">
              <Users className="me-1" size={18} />
              Personnages et Idoles
            </Nav.Link>
            <Nav.Link as={Link} to="/psychologie">
              <Brain className="me-1" size={18} />
              Psychologie
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;