import { Link, useNavigate, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap';

import { doc } from 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';

import { db } from '../../firebase/firebase';

import Loader from "../../components/Loader";
import Message from "../../components/Message";


const ProductScreen = () => {
    const { id: productId } = useParams();
    const navigate = useNavigate();

    const quero = doc(db, 'Products', `${productId}`);
    const [value, loading, error, snapshot] = useDocumentData(quero);

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