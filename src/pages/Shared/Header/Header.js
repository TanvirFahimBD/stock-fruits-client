import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/' >Stock Fruits</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/managefruits' >Manage Fruits</Nav.Link>
                            <Nav.Link as={Link} to='/addfruits' >Add Fruits </Nav.Link>
                            <Nav.Link as={Link} to='/myfruits' >My Fruits </Nav.Link>
                            <Nav.Link as={Link} to='/blogs' >Blogs </Nav.Link>
                            <Nav.Link as={Link} to='/about' >About </Nav.Link>
                            <Nav.Link as={Link} to='/contact' >Contact </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/profile'>
                                Profile
                            </Nav.Link>
                            <Nav.Link as={Link} to='/login'>
                                LogIn
                            </Nav.Link>
                            <Nav.Link as={Link} to='/'>
                                Logout
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;