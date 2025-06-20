import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdHeight, MdLocationPin } from 'react-icons/md';
import './Footer.css';
import logo from '../../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg={4} md={6}>
                        <div className="logo">
                            <div className='d-flex align-items-center justify-content-center'>
                                <img src={logo} alt="Logo" style={{ width :"150px"}} />
                                {/* <h2>DIVERGE AI</h2> */}
                            </div>
                            <p className='mt-3' >We Bring the Power of Data and Science & AI to Business.</p>
                            <div className="social-links">
                                <NavLink className='rounded-circle border-1' to=""><FaFacebook /></NavLink>
                                <NavLink className='rounded-circle border-1' to=""><FaTwitter /></NavLink>
                                <NavLink className='rounded-circle border-1' to=""><FaLinkedin /></NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={6}>
                        <div className="quick-links">
                            <p>Useful Links</p>
                            <ul>
                                <li><a href="#">
                                    <FaArrowRight className='me-2' />
                                    Home
                                </a></li>
                                <li>
                                    <a href="#about">
                                    <FaArrowRight className='me-2' />
                                    About
                                </a>
                                </li>
                                <li>
                                    <a href="#services">
                                    <FaArrowRight className='me-2' />
                                    Services
                                </a>
                                </li>
                                <li><a href="#data-analysis"><FaArrowRight className='me-2' />Data Analysis</a></li>
                                <li><a href="#contact"><FaArrowRight className='me-2' />Contact Us</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="services">
                            <p>Our Services</p>
                            <ul>
                                <li><NavLink to="/"><FaArrowRight className='me-2' />Robotic Automation</NavLink></li>
                                <li><NavLink to="/"><FaArrowRight className='me-2' />Predictive Analysis</NavLink></li>
                                <li><NavLink to="/"><FaArrowRight className='me-2' />Machine Learning</NavLink></li>
                                <li><NavLink to="/"><FaArrowRight className='me-2' />Data Security</NavLink></li>
                                <li><NavLink to="/"><FaArrowRight className='me-2' />IT Management</NavLink></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="contact-info">
                            <p>Contact Us</p>
                            <div className="contact-details">
                                <BsFillTelephoneFill /><span>+92 3000 695646</span>
                            </div>
                            <div className="contact-details">
                                <FaEnvelope /><span>info@robotapex.xyz</span>
                            </div>
                            <div className="contact-details">
                                <MdLocationPin /><span>Tareen Institute, Lodhran</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="copyright border-top pt-4 pb-0" xs={12}>
                        <p className='d-flex justify-content-center'>&copy; 2025, &nbsp; <NavLink to='/' className='nav-link'> Tanni.dev </NavLink>&nbsp; All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
