import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'


function Navigatebar() {
    return (
        <>

            <Navbar /*bg="dark"*/ variant="dark" className='nav'>
                <Container>
                    <Navbar.Brand href="/" className='sub'>Travel Destination</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/" className='link'>Home</Nav.Link>
                        <Nav.Link href="about" className='link'>About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}


export default Navigatebar;