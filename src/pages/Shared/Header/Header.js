import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home" style={{letterSpacing:'1.5px'}} >CERAMIC WORLD</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink to='/home' style={{textDecoration:'none'}}>
                      <Nav.Link href="#home">Home</Nav.Link>
                    </NavLink>
                    <NavLink to='/shop' style={{textDecoration:'none'}}>
                      <Nav.Link href="#link">Shop</Nav.Link>
                    </NavLink>
                    <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;