import { Link, useNavigate, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap';

import products from "./products";


const ProductScreen = () => {
    const { id: productId } = useParams();
    const navigate = useNavigate();

    const product = products.find(p => p._id === productId);

    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Volver al Menu
            </Link>

            <>
                <Row>
                    <Col md={5}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>

                    <Col md={4}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <p>{product.description}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Precio:
                                        </Col>
                                        
                                        <Col>
                                            <strong>${product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Estado:
                                        </Col>

                                        <Col>
                                            <strong>
                                                {product.countInStock > 0
                                                    ? 'En Stock'
                                                    : 'Fuera de Stock'
                                                }
                                            </strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row> 
            </>
        </>
    )
}

export default ProductScreen