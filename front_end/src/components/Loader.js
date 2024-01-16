import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return(
        <Spinner
            animation='border'
            role='status'
            style={{
                width: '100px',
                heigth: '100px',
                margin: 'auto',
                display: 'block',
            }}
        ></Spinner>
    )
}

export default Loader