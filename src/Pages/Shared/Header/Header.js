import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../image/logo.png'
import './Header.css'



const Header = () => {
    const [user] = useAuthState(auth)
    
    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect bg="dark" expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        {/* height={30} */}
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='text-white fw-bolder fs-5' as={Link} to="home">HOME</Nav.Link>
                            <Nav.Link className='text-white fw-bolder fs-5' as={Link} to="services">SERVICES</Nav.Link>
                            <Nav.Link className='text-white fw-bolder fs-5' as={Link} to="blogs">BLOGS</Nav.Link>
                            <Nav.Link className='text-white fw-bolder fs-5' as={Link} to="about">ABOUT</Nav.Link>
                            {
                                user ?
                                <span className='signOutBtn' onClick={handleSignOut}>SIGN OUT</span>
                                :
                                <Nav.Link className='text-white fw-bolder fs-5' as={Link} to="login">LOGIN</Nav.Link>
                                }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;