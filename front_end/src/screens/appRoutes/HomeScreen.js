import { Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

import { db } from '../../firebase/firebase';

import Message from '../../components/Message';
import Loader from '../../components/Loader';
import Product from '../../components/Product';

const HomeScreen = () => {
    const quero = collection(db, 'Products');
    const [snapshot, loading, error] = useCollection(quero);

    return (
        <>
            {
                loading
                    ? (
                        <>
                            <Loader />
                        </>
                    )
                : error
                    ? (
                        <Message variant='danger'>
                            { error?.data?.message || error.error }
                        </Message>
                    )
                : (
                    <>
                        <Row>
                            <Col className='text-center'>
                                <h1>Ultimos Productos</h1>
                            </Col>
                        </Row>
                        <Row>
                            {snapshot.docs.map((product) => {
                                console.log(product.data());
                                return (
                                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                                        <Product product={product} />
                                    </Col>
                                )
                            })}
                        </Row>
                    </>
                )
            }
        </>
    )
}

export default HomeScreen