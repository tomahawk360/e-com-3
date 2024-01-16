import { Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

import Message from '../../components/Message';
import Loader from '../../components/Loader';
import Product from '../../components/Product';

import products from './products';

const HomeScreen = () => {
    return (
        <>
            <Row>
                <Col className='text-center'>
                    <h1>Ultimos Productos</h1>
                </Col>
            </Row>
            <Row>
                {products.map((product) => {
                    return(
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                        

                    )
                })}
            </Row>
        </>
    )
}

export default HomeScreen