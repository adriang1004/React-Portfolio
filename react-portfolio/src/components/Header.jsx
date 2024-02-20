import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
  // sets the activeClassName 
  const setActiveClass = ({ isActive }) => (isActive ? 'activeLink' : 'link');

  return (
    <Navbar fixed="top" expand="md" className="shadow-sm">
        <Container fluid>
      <Navbar.Brand as={NavLink} to="/" className="fs-2" style={{color:'#ffd700'}}>
        Adrian Garcia
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll>
          <Nav.Item>
            <Nav.Link 
              as={NavLink} 
              to="/" 
              className={setActiveClass} 
            >
              About Me
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              as={NavLink} 
              to="/portfolio" 
              className={setActiveClass}
            >
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              as={NavLink} 
              to="/contact" 
              className={setActiveClass}
            >
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              as={NavLink} 
              to="/resume" 
              className={setActiveClass}
            >
              Resume
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
