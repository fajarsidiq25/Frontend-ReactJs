import React from 'react';
import { Container, Navbar, Card, Carousel, Row, Col, Nav } from "react-bootstrap";

const HomeComp = () => {
    return (
        <div >
            {/* Navbar */}
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home"><img src="/Assets/logo technopartner.png" width={100} height={50} alt="" /></Navbar.Brand>
                </Container>
            </Navbar>

            <div  style={{
            backgroundImage: 'url(/Assets/motif.png)', // Ganti dengan path gambar latar belakang Anda
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '40vh',
        }}>
                {/* Card */}
                <Container style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Row>
                        <Card style={{ width: '18rem' }} className='mt-5 border shadow-sm'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">Good Afternoon,</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted fw-bold">Guntur Saputro</Card.Subtitle>
                                <Col className='col-12'>
                                    <Card.Link href="#"><img src="/Assets/sc.png" alt="" className='mt-3 img-fluid rounded-circle col-2' /></Card.Link>
                                    <span style={{ fontSize: '15px' }}>Saldo Rp292929</span><br />
                                    <span style={{ fontSize: '15px' }}>point 88888</span>
                                </Col>
                                <Col className='col-10'>

                                </Col>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
                {/* Card akhir */}

                {/* banner */}
                <Carousel className="mt-5">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/Assets/banner/m1.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/Assets/banner/m2.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/Assets/banner/m3.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='mt-5' style={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
            }}>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home"><img src="/Assets/home2.png" alt="HomeComp" /></Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link href="#meu"><img src="/Assets/menu2.png" alt="MenuComp" /></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default HomeComp;
