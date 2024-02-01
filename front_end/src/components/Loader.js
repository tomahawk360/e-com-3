import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return(
        <div className='text-center'>
            <Spinner
                animation='border'
                role='status'
                style={{
                    height: '50px',
                    width: '50px',
                }}
            ></Spinner>
        </div>
    )
}

export default Loader