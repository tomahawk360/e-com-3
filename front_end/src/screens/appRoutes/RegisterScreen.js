import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

import FormContainer from '../../components/FormContainer';
import { login } from '../../slices/authSlice';
import { auth } from '../../firebase/firebase';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');

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

    const submitHandler = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                updateProfile(userAuth.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: photo,
                        }))
                    )
                        .then(navigate(redirect))
                        .catch((err) => {
                            toast.error(err?.message || err?.error);
                        })
                    .catch((err) => {
                        toast.error(err?.message || err?.error);
                    })
            })
            .catch((err) => {
                toast.error(err?.message || err?.error);
            })
    }

    return (
        <FormContainer>
            <h1>Registrate</h1>

            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name' className='my-3'>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type='text'
                        placeholder='Ingresar nombre'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

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

                <Form.Group controlId='photourl' className='my-3'>
                    <Form.Label>URL de la foto</Form.Label>
                    <Form.Control 
                        type='text'
                        placeholder='Ingresar url de la foto'
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                    />
                </Form.Group>

                <Button
                    type='submit'
                    variant='primary'
                    className='mt-2'
                >
                    Registrarse
                </Button>
            </Form>
        </FormContainer>
    )
}

export default RegisterScreen