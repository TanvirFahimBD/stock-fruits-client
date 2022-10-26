import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/' >Stock Fruits</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {user &&
                                <>
                                    <Nav.Link as={Link} to='/managefruits' >Manage Fruits</Nav.Link>
                                    <Nav.Link as={Link} to='/addfruits' >Add Fruits </Nav.Link>
                                    <Nav.Link as={Link} to='/myfruits' >My Fruits </Nav.Link>
                                </>
                            }
                            <Nav.Link as={Link} to='/blogs' >Blogs </Nav.Link>
                            <Nav.Link as={Link} to='/about' >About </Nav.Link>
                            <Nav.Link as={Link} to='/contact' >Contact </Nav.Link>
                        </Nav>
                        <Nav>
                            {!user && <Nav.Link as={Link} to='/login'>
                                LogIn
                            </Nav.Link>}
                            {user &&
                                <>
                                    <Nav.Link as={Link} to='/profile'>
                                        {user?.displayName ? user?.displayName : user?.email}
                                    </Nav.Link>
                                    <Nav.Link as={Link} to='/' onClick={() => signOut(auth)}>
                                        Logout
                                    </Nav.Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;