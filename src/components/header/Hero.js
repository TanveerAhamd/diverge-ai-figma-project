import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LetsTalkButton from '../common/button/Button';
import hero from '../../assets/images/hero.png';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero" id='hero'>
            <div className='container'>
                <Row className='align-items-center'>
                    <Col lg={8} md={8} sm={12} className="content-section">
                        <div className="content text-start">
                            <h6>artificial intelligence and projects</h6>
                            <h2>Get Closer Look How Business Develop in AI Data Analysis</h2>
                            <p className="description">
                                Quis autem vel eum iure reprehenderit aui in ea voluptate velit esse ruam nihil noles tiae conseutur.
                            </p>
                            <div className='pb-3 w-25'>
                            <LetsTalkButton title="Contact Us" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} className="image-section ms-auto">
                        <img src={hero} alt="Hero" className='img-fluid' />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Hero;
