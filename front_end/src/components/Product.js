import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <>
            <Card className='my-3 p-3 rounded'>
                <Link to={`/product/${product.id}`}>
                    <Card.Img src={product.data().image} variant='top' />
                </Link>

                <Card.Body>
                    <Link to={`/product/${product.id}`}>
                        <Card.Title as='div' className='product-title'>
                            <strong>{product.data().name}</strong>
                        </Card.Title>
                    </Link>

                    <Card.Text as='h3'>
                        ${product.data().price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Product