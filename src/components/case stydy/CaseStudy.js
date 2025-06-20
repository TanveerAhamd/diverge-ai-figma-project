import React from 'react';
import './CaseStudy.css';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';

const CaseStudy = () => {
    return (
        <div className="case-study">
            <Container>
                <Row>
                    <Col sm={12}>
                        <p className="text-center text-uppercase text-primary">Case Study</p>
                        <h2 className="text-center heading-services p-sm-1">
                            Our Recent Case Studies
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Carousel indicators={true} className='d-md-block d-none'>
                            {/* Slide 1 */}
                            <Carousel.Item>
                                <Row>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">

                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Robotic Automation
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Officia deserunt mollitia animi nobis
                                            </Card.Text>
                                            <Button>
                                                <BsArrowRight />
                                            </Button>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">

                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Predictive Analysis
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Officia deserunt mollitia animi nobis
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                <BsArrowRight />
                                            </Button>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">

                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Machine Learning
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Officia deserunt mollitia animi nobis
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                <BsArrowRight />
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

                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Robotic Automation
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Officia deserunt mollitia animi nobis
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                <BsArrowRight />
                                            </Button>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">
                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Predictive Analysis
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Officia deserunt mollitia animi nobis
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                <BsArrowRight />
                                            </Button>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">

                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Machine Learning
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Officia deserunt mollitia animi nobis
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                <BsArrowRight />
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
                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Robotic Automation
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Officia deserunt mollitia animi nobis
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                <BsArrowRight />
                                            </Button>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">

                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Predictive Analysis
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Officia deserunt mollitia animi nobis
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                <BsArrowRight />
                                            </Button>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">

                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Machine Learning
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Officia deserunt mollitia animi nobis
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                <BsArrowRight />
                                            </Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                        <Carousel indicators={true} prevLabel="" nextLabel="" labels={false} className='d-md-none d-sm-bllock'>
                            {/* Slide 1 */}
                            <Carousel.Item>
                                <Row>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">

                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Robotic Automation
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Officia deserunt mollitia animi nobis
                                            </Card.Text>
                                            <Button>
                                                <BsArrowRight />
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
                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Predictive Analysis
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Officia deserunt mollitia animi nobis
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                <BsArrowRight />
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

                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Machine Learning
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Officia deserunt mollitia animi nobis
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                <BsArrowRight />
                                            </Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            {/* Slide 4 */}
                            <Carousel.Item>
                                <Row>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">

                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Robotic Automation
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Officia deserunt mollitia animi nobis
                                            </Card.Text>
                                            <Button>
                                                <BsArrowRight />
                                            </Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            {/* Slide 5 */}
                            <Carousel.Item>
                                <Row>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">
                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Predictive Analysis
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Officia deserunt mollitia animi nobis
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                <BsArrowRight />
                                            </Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            {/* Slide 6 */}
                            <Carousel.Item>
                                <Row>
                                    <Col md={4}>
                                        <Card className="mb-2 py-3 p-sm-1">

                                            <Card.Title className="text-center text-dark font-weight-bold mt-4">
                                                Machine Learning
                                            </Card.Title>
                                            <Card.Text className="text-center text-gray font-size">
                                                Officia deserunt mollitia animi nobis
                                            </Card.Text>
                                            <Button variant="primary" className="text-uppercase">
                                                <BsArrowRight />
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
    )
}

export default CaseStudy