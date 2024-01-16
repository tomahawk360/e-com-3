import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import Footer from './components/Footer';

import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<>
			<Header />
			<main className='py-4'>
				<Container>
					<Outlet />
				</Container>
			</main>

			<Footer />
			<ToastContainer />
		</>
	);
}

export default App;
