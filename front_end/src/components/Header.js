import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaShoppingCart, FaUser} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { logout } from '../slices/authSlice';
import { auth } from '../firebase/firebase';

const Header = () => {
    const { userInfo } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try{
            auth.signOut();
            dispatch(logout());
            toast.success('Usted ha salido de su cuenta');
        } catch (err) {
            toast.error(err?.message || err?.error);
        }
    }

    return (
        <header>
            <Navbar bg='primary' variant='dark' expand='md' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>E-Com</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <FaShoppingCart /> Cart
                                </Nav.Link>
                            </LinkContainer>
                            {
                                userInfo
                                    ? (
                                        <NavDropdown title={userInfo.displayName} id='username'>
                                            <LinkContainer to='/profile'>
                                                <NavDropdown.Item>Perfil</NavDropdown.Item>
                                            </LinkContainer>
                                            <NavDropdown.Item onClick={logoutHandler}>
                                                Logout
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    )
                                : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link>
                                            <FaUser />Login
                                        </Nav.Link>
                                    </LinkContainer>
                                )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header