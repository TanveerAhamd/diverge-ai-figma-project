import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import clients from '../../assets/images/clients.png';
import ai from '../../assets/images/ai.png';
import './DataAnalysis.css';
import data from '../../assets/images/data.png';

const DataAnalysis = () => {
    return (
        <div className="data-analysis bg-blue text-white" id='data-analysis'>
            <Container>
                <Row>
                    <Col md={12} sm={12} lg={7}>
                        <div className="">
                            <h5 className="text-uppercase">Data Analysis</h5>
                            <h2 className="font-size-3rem">Turn Data into Data Board For Smart Technology</h2>
                            <p className='p'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                                <Row className='mt-5'>
                                    <Col md={6}>
                                        <Card className="bg-card border-0 text-white mb-3">
                                            <div className="d-flex align-items-center gap-4">
                                                <div className="icon p-3">
                                                    <img src={ai} alt='' />
                                                </div>
                                                <div>
                                                    <h3 className="text-white">123+</h3>
                                                    <p>Lorem 2 words</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col md={6}>
                                        <Card className="bg-card text-white border-0 mb-3">
                                            <div className="d-flex align-items-center gap-4">
                                                <div className="icon p-3">
                                                    <img src={clients} alt='' />
                                                </div>
                                                <div>
                                                    <h3 className="text-white">456+</h3>
                                                    <p>Lorem 2 words</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                        </div>
                    </Col>
                    <Col md={12} sm={12} lg={5}>
                        <img
                            src={data}
                            alt="Data Analysis"
                            className="w-100 h-100"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DataAnalysis;
