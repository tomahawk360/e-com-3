import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

import './assets/bootstrap.min.css';
import './assets/index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

import HomeScreen from './screens/appRoutes/HomeScreen';
import ProductScreen from './screens/appRoutes/ProductScreen';
import CartScreen from './screens/appRoutes/CartScreen';
import LoginScreen from './screens/appRoutes/LoginScreen';
import RegisterScreen from './screens/appRoutes/RegisterScreen';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App/>}>
			<Route index={true} path='/' element={<HomeScreen />} />
			<Route index={true} path='/product/:id' element={<ProductScreen />} />
			<Route index={true} path='/cart' element={<CartScreen />} />
			<Route index={true} path='/login' element={<LoginScreen />} />
			<Route index={true} path='/register' element={<RegisterScreen />} />
		</Route>
	)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
