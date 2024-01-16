import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const currYear = new Date().getFullYear();

    return (
        <footer style={{backgroundColor : '#6f42c1'}}>
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-center py-4 footer-content'>Sobre Nosotros</h1>
                        <p className='px-4 footer-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                    <Col>
                        <h1 className='text-center py-4 footer-content'>Navegacion</h1>

                        <Container className='ps-5'>
                            <Row>
                                <Link to='/about'>
                                    <h5 className='px-3 footer-content'>Sobre Nosotros</h5>
                                </Link>
                            </Row>
                            <Row>
                                <Link to='/'>
                                    <h5 className='px-3 footer-content'>Tienda</h5>
                                </Link>
                            </Row>
                            <Row>
                                <Link to='/cart'>
                                    <h5 className='px-3 footer-content'>Carro</h5>
                                </Link>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <h1 className='text-center py-4 footer-content'>Contactanos</h1>

                        <IconContext.Provider value={{ color: 'white', size: '30px'}}>
                            <Row className='ps-5'>
                                <Col>
                                    <Link to='/'>
                                        <FaFacebook />
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to='/'>
                                        <FaXTwitter />
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to='/'>
                                        <FaInstagram />
                                    </Link>
                                </Col>
                            </Row>
                        </IconContext.Provider>
                    </Col>

                </Row>
                <Row>
                    <Container>
                        <h6 className='text-center py-3' style={{color : '#fff'}}>
                            <p>E-Com &copy; {currYear}</p>
                        </h6>
                    </Container>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer