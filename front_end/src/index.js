import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store';

import './assets/bootstrap.min.css';
import './assets/index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

import PrivateRoute from './components/filters/PrivateRoute';

import HomeScreen from './screens/appRoutes/HomeScreen';
import ProductScreen from './screens/appRoutes/ProductScreen';
import AboutScreen from './screens/appRoutes/AboutScreen';
import CartScreen from './screens/appRoutes/CartScreen';
import LoginScreen from './screens/appRoutes/LoginScreen';
import RegisterScreen from './screens/appRoutes/RegisterScreen';

import OrderScreen from './screens/privateRoutes/OrderScreen';
import PaymentScreen from './screens/privateRoutes/PaymentScreen';
import PlaceOrderScreen from './screens/privateRoutes/PlaceOrderScreen';
import ProfileScreen from './screens/privateRoutes/ProfileScreen';
import ShippingScreen from './screens/privateRoutes/ShippingScreen';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App/>}>
			<Route index={true} path='/' element={<HomeScreen />} />
			<Route index={true} path='/product/:id' element={<ProductScreen />} />
			<Route index={true} path='/about' element={<AboutScreen />} />
			<Route index={true} path='/cart' element={<CartScreen />} />
			<Route index={true} path='/login' element={<LoginScreen />} />
			<Route index={true} path='/register' element={<RegisterScreen />} />

			<Route path='' element={<PrivateRoute />}>
				<Route index={true} path='/shipping' element={<ShippingScreen />} />
				<Route index={true} path='/payment' element={<PaymentScreen />} />
				<Route index={true} path='/placeorder' element={<PlaceOrderScreen />} />
				<Route index={true} path='/order/:id' element={<OrderScreen />} />
				<Route index={true} path='/profile' element={<ProfileScreen />} />
			</Route>
		</Route>
	)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
