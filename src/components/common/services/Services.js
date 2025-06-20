import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import robot from '../../../assets/images/robot-automation.png';
import predictive from '../../../assets/images/predictive-analysis.png';
import machine from '../../../assets/images/machine- learning.png';
import './Services.css';

const Services = () => {
    return (
        <div className="services" id='services'>
            <Container>
                <Row>
                    <Col sm={12}>
                        <p className="text-center text-uppercase text-primary">Services we provide</p>
                        <h2 className="text-center heading-services p-sm-1 fs-sm-3">
                            Our Purpose is To Deliver Excellence in services and Execution
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Carousel indicators={true} prevLabel="" nextLabel="" className='d-md-block d-none'>
                            {/* Slide 1 */}
                            <Carousel.Item>
                                <Row>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">
                                            <div className="icon text-center mt-4">
                                                <img src={robot} alt='' className='image-fulid' />
                                            </div>
                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Robotic Automation
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                Learn More
                                            </Button>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">
                                            <div className="icon text-center mt-4">
                                                <img src={predictive} alt='' className='image-fulid' />
                                            </div>
                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Predictive Analysis
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                Learn More
                                            </Button>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">
                                            <div className="icon text-center mt-4">
                                                <img src={machine} alt='' className='image-fulid' />
                                            </div>
                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Machine Learning
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                Learn More
                                            </Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            {/* Slide 2 */}
                            <Carousel.Item>
                                <Row>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">
                                            <div className="icon text-center mt-4">
                                                <img src={robot} alt='' className='image-fulid' />
                                            </div>
                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Robotic Automation
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                Learn More
                                            </Button>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">
                                            <div className="icon text-center mt-4">
                                                <img src={predictive} alt='' className='image-fulid' />
                                            </div>
                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Predictive Analysis
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                Learn More
                                            </Button>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">
                                            <div className="icon text-center mt-4">
                                                <img src={machine} alt='' className='image-fulid' />
                                            </div>
                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Machine Learning
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                Learn More
                                            </Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            {/* Slide 3 */}
                            <Carousel.Item>
                                <Row>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">
                                            <div className="icon text-center mt-4">
                                                <img src={robot} alt='' className='image-fulid' />
                                            </div>
                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Robotic Automation
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                Learn More
                                            </Button>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">
                                            <div className="icon text-center mt-4">
                                                <img src={predictive} alt='' className='image-fulid' />
                                            </div>
                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Predictive Analysis
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                Learn More
                                            </Button>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">
                                            <div className="icon text-center mt-4">
                                                <img src={machine} alt='' className='image-fulid' />
                                            </div>
                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Machine Learning
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                Learn More
                                            </Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                        <Carousel indicators={true} prevLabel="" nextLabel="" className='d-md-none d-sm-bllock'>
                            {/* Slide 1 */}
                            <Carousel.Item>
                                <Row>
                                    <Col sm={12}>
                                        <Card className="mb-2 py-3 p-sm-1">
                                            <div className="icon text-center mt-4">
                                                <img src={machine} alt='' className='image-fulid' />
                                            </div>
                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Machine Learning
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                Learn More
                                            </Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            {/* Slide 2 */}
                            <Carousel.Item>
                                <Row>
                                    <Col sm={12}>
                                        <Card className="mb-2 py-3 p-sm-1">
                                            <div className="icon text-center mt-4">
                                                <img src={machine} alt='' className='image-fulid' />
                                            </div>
                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Machine Learning
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                Learn More
                                            </Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            {/* Slide 3 */}
                            <Carousel.Item>
                                <Row>
                                    <Col sm={12}>
                                        <Card className="mb-2 py-3 p-sm-1">
                                            <div className="icon text-center mt-4">
                                                <img src={machine} alt='' className='image-fulid' />
                                            </div>
                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Machine Learning
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                Learn More
                                            </Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            {/* Slider 4 */}
                            <Carousel.Item>
                                <Row>
                                    <Col sm={12}>
                                        <Card className="mb-2 py-3 p-sm-1">
                                            <div className="icon text-center mt-4">
                                                <img src={machine} alt='' className='image-fulid' />
                                            </div>
                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Machine Learning
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                Learn More
                                            </Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            {/* Slider 5 */}
                            <Carousel.Item>
                                <Row>
                                    <Col sm={12}>
                                        <Card className="mb-2 py-3 p-sm-1">
                                            <div className="icon text-center mt-4">
                                                <img src={machine} alt='' className='image-fulid' />
                                            </div>
                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Machine Learning
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                Learn More
                                            </Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            {/* Slider 6 */}
                            <Carousel.Item>
                            <Row>
                                    <Col sm={12}>
                                        <Card className="mb-2 py-3 p-sm-1">
                                            <div className="icon text-center mt-4">
                                                <img src={machine} alt='' className='image-fulid' />
                                            </div>
                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Machine Learning
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                Learn More
                                            </Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;
