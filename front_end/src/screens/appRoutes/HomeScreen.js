import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

import { useGetProductsQuery } from '../../slices/productApiSlice';

import Message from '../../components/Message';
import Loader from '../../components/Loader';
import Product from '../../components/Product';

const HomeScreen = () => {
    const [datos, setDatos] = useState([]);

    const { data, isLoading, isError } = useGetProductsQuery();

    useEffect(() => {
        if(data) {
            data.forEach((product) => {
                setDatos(datos => [...datos, {...product.data(), id: product.id}]);
                console.log(datos.length);
            });
        }
    }, [data]);

    return (
        <>
            {
                isLoading
                    ? (
                        <>
                            <Loader />
                        </>
                    )
                : isError
                    ? (
                        <Message variant='danger'>
                            { isError?.data?.message || isError.error }
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
                            {datos.map((product) => {
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