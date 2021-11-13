import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user,logOut} = useAuth();

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

                    { user?.email ?
                        <div className='d-flex'>
                           <NavLink to='/dashboard' style={{textDecoration:'none'}}>
                              <Nav.Link on href="#link">Dashboard</Nav.Link>
                           </NavLink>
                           <Nav.Link onClick={logOut} href="#link">Logout</Nav.Link>
                        </div>
                        :
                        <NavLink to='/login' style={{textDecoration:'none'}}>
                          <Nav.Link on href="#link">Login</Nav.Link>
                        </NavLink>
                        }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;