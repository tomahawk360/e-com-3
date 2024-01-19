import { Row, Col } from 'react-bootstrap';

const AboutScreen = () => {
    return (
        <>
            <Row>
                <Col className='text-center'>
                    <h1>Sobre Nosotros</h1>
                </Col>
            </Row>

            <Row>
                <Col className='text-center'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Col>
            </Row>
        </>
    )
}

export default AboutScreen