import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../logos/Group 1329.png'

const Header = () => {
    const [user] = useAuthState(auth);
   const handelSignOut = () => {
    signOut(auth).then(() => {

    })
}
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img style={{height:"40px",width:"100px"}} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                       
                        <Nav className='me-5'>
                            <Nav.Link as={Link} to="/donation" className="me-5">Donation</Nav.Link>
                            <Nav.Link as={Link} to="/event" className="me-5">Event</Nav.Link>
                            <Nav.Link as={Link} to="/blog" className="me-5">Blog</Nav.Link>
                            {
                                user
                                    ?
                                    <Nav.Link as={Link} to="/login" onClick={handelSignOut}>
                                        SignOut

                                       
                                    </Nav.Link>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;