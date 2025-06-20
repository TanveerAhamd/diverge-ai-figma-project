import React from 'react';
import './Faq.css';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonStyle from '../common/button/Button';

const Faq = () => {
    return (
        <div className='faq' id='faq'>
            <Container>
                <Row>
                    <Col sm={12}>
                        <p className="text-center text-uppercase text-primary">FAQ,S</p>
                        <h2 className="text-center heading-services p-sm-1">
                            Frequently Asked Questions
                        </h2>
                    </Col>
                </Row>
                <div className="accordion" id="faqAccordion">
                    <Row>
                        <Col md={6} className='mb-3'>
                            <div className="accordion-item w-100">
                                <h2 className="accordion-header w-100">
                                    <button className="accordion-button w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <ButtonStyle title="What is Divergeai?" />
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <strong>Divergeai</strong> We Bring the Power of Data and Science & AI to Business. Chatbot development company in Pakistan.
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className='mb-3'>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        <ButtonStyle title="Who was founder Divergeai?" />
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <strong>Founder</strong> The Founder of the Divergeai was Mr. Abcdef.
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className='mb-3'>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        <ButtonStyle title="Who is CEO of Divergeai?" />
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <strong>CEO</strong> The Chief Exctive Officer of the Divergeai was Mr. Abcdef.
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className='mb-3'>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <ButtonStyle title="What are the services provide's Divergeai?" />
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <strong>Services</strong> The Divergeai many services provides aout the AI.
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className='mb-3'>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                        <ButtonStyle title="How many have employes of Divergeai?" />
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                    <strong>Employes</strong> The Divergeai have 10-100 employes.
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className='mb-3'>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                        <ButtonStyle title="Head office of the Divergeai" />
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                    <strong>Head Office</strong> THe Head Office of the Divergeai in the Lahore Punjab Pakistan.
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div >
    )
}

export default Faq;