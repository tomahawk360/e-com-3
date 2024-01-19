import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

import FormContainer from '../../components/FormContainer';
import { login } from '../../slices/authSlice';
import { auth } from '../../firebase/firebase';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { userInfo } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/';

    useEffect(() => {
        if(userInfo) {
            navigate(redirect);
        }
    }, [userInfo, redirect, navigate]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try{
            const res = await signInWithEmailAndPassword(auth, email, password);

            dispatch(login({
                email: res.user.email,
                uid: res.user.uid,
                displayName: res.user.displayName,
                photoUrl: res.user.photoURL,
            }))

            navigate(redirect);

        } catch (err) {
            toast.error(err?.message || err?.error);
        }
    }

    return (
        <FormContainer>
            <h1>Login</h1>

            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email' className='my-3'>
                    <Form.Label>Direccion de correo</Form.Label>
                    <Form.Control 
                        type='email'
                        placeholder='Ingresar email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId='password' className='my-3'>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control 
                        type='password'
                        placeholder='Ingresar contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button
                    type='submit'
                    variant='primary'
                    className='mt-2'
                >
                    Login
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    ¿Nuevo Cliente? <Link to={redirect !== '/' ? `/register?redirect=${redirect}` : '/register'}>Registrate</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen