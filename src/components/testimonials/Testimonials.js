import React from 'react';
import './Testimonials.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import testimonials from '../../assets/images/testimonials.png';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
    return (
        <div className='testimonilas' id='testimonilas'>
            <Container>
                <Row>
                    <Col md={6} sm={12} lg={6}>
                        <h6 className='text-uppercase text-primary'>testimonilas</h6>
                        <h2>Hear it From Our Clients</h2>
                        <img
                            src={testimonials}
                            alt='Testimonials Image'
                            className='img-fluid pt-3'
                        />
                    </Col>
                    <Col md={6} sm={12} lg={6}>
                        <div className='icon d-flex align-items-center justify-content-center bg-primary rounded-circle text-white mb-4'>
                            <RiDoubleQuotesL />
                        </div>
                        <Carousel indicators={true} prevLabel="" aria-label={false} nextLabel="">
                            {/* Slide 1 */}
                            <Carousel.Item>
                                <p>
                                    <sup>
                                        <span>
                                            <FaQuoteLeft />
                                        </span>
                                    </sup>
                                    I had the pleasure of working with an exceptional team that truly exceeded my expectations. Their dedication and expertise are unmatched, and they consistently deliver outstanding results.
                                    <sup>
                                        <span>
                                            <FaQuoteRight />
                                        </span>
                                    </sup>
                                </p>
                                <div className='client'>
                                    <h4 className='text-primary fs-4'>Peter Johns</h4>
                                    <p className='text-gray fs-5'>Head of informatics at EBI</p>
                                </div>
                            </Carousel.Item>
                            {/* Slide 2 */}
                            <Carousel.Item>
                                <p>
                                    <sup>
                                        <span>
                                            <FaQuoteLeft />
                                        </span>
                                    </sup>
                                    I had the pleasure of working with an exceptional team that truly exceeded my expectations. Their dedication and expertise are unmatched, and they consistently deliver outstanding results.
                                    <sup>
                                        <span>
                                            <FaQuoteRight />
                                        </span>
                                    </sup>
                                </p>
                                <div className='client'>
                                    <h4 className='text-primary fs-4'>Peter Johns</h4>
                                    <p className='text-gray fs-5'>Head of informatics at EBI</p>
                                </div>
                            </Carousel.Item>
                            {/* Slide 3 */}
                            <Carousel.Item>
                                <p>
                                    <sup>
                                        <span>
                                            <FaQuoteLeft />
                                        </span>
                                    </sup>
                                    I had the pleasure of working with an exceptional team that truly exceeded my expectations. Their dedication and expertise are unmatched, and they consistently deliver outstanding results.
                                    <sup>
                                        <span>
                                            <FaQuoteRight />
                                        </span>
                                    </sup>
                                </p>
                                <div className='client'>
                                    <h4 className='text-primary fs-4'>Peter Johns</h4>
                                    <p className='text-gray fs-5'>Head of informatics at EBI</p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonials;