import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ButtonStyle from '../button/Button';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <Container>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <div className='text-center'>
                            <h2>Let's Make Somthing Great Togather</h2>
                            <div className='button'>
                            <ButtonStyle title="contact Us" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Contact;
