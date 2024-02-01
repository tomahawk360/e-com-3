import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { doc } from 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';

import { db } from '../../firebase/firebase';

import { addToCart } from '../../slices/cartSlice';

import Loader from "../../components/Loader";
import Message from "../../components/Message";


const ProductScreen = () => {
    const { id: productId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const quero = doc(db, 'Products', `${productId}`);
    const [value, loading, error, snapshot] = useDocumentData(quero);

    const [qty, setQty] = useState(1);

    const addToCartHandler = () => {
        dispatch(addToCart({...value, id: Number(productId), qty}));
        navigate('/cart');
    }

    return (
        <>
            <Link className='btn btn-light mb-3' to='/'>
                Volver al Menu
            </Link>

            {
                loading 
                    ? (
                        <>
                            <Loader />
                        </>
                    )
                : error
                    ? (
                        <>
                            <Message variant={'danger'}>
                                { error?.data?.message || error.error }
                            </Message>
                        </>
                    )
                : (
                    <>
                        <Row>
                            <Col md={5}>
                                <Image src={value.image} alt={value.name} fluid />
                            </Col>

                            <Col md={4}>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <h3>{value.name}</h3>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <p>{value.description}</p>
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
                                                    <strong>${value.price}</strong>
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
                                                        {value.countInStock > 0
                                                            ? 'En Stock'
                                                            : 'Fuera de Stock'
                                                        }
                                                    </strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        {
                                            value.countInStock > 0 && (
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Cantidad</Col>
                                                        <Col>
                                                            <Form.Control
                                                                as='select'
                                                                value={qty}
                                                                onChange={(e) => setQty(Number(e.target.value))}
                                                            >
                                                                {[...Array(value.countInStock).keys()].map((x) => (
                                                                    <option key={x+1} value={x+1}>
                                                                        {x+1}
                                                                    </option>
                                                                ))}
                                                            </Form.Control>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            )
                                        }
                                        <ListGroup.Item>
                                            <Button
                                                className='btn-block'
                                                type='button'
                                                disabled={value.countInStock === 0}
                                                onClick={addToCartHandler}
                                            >
                                                Añadir al carro
                                            </Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row> 
                    </>
                )
            }
        </>
    )
}

export default ProductScreen