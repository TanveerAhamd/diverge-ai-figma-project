import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ButtonStyle from '../button/Button';
import './Navbar.css';
import logo from '../../../assets/images/logo.png';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar expand="lg" bg="transparent" className="navbar" id='navbar'>
            <Container>
                <Navbar.Brand to="#">
                    <NavLink className='nav-link' to="/">
                        <div className="logo">
                            <img src={logo} style={{ width: "170px" }} alt="Logo" />
                        </div></NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto color-white">
                        <NavLink className='nav-link' to="/">Home</NavLink>
                        <a className='nav-link' href="#about">About</a>
                        <a className='nav-link' href="#services">Services</a>
                        <a className='nav-link' href="#data-analysis">Data Analysis</a>
                        <a className='nav-link' href="#faq">FAQ</a>
                        <a className='nav-link' href="#contact">Contact Us</a>
                        <ButtonStyle title="Let's Talk" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
