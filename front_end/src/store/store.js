import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from '../slices/authSlice.js';
import cartSliceReducer from '../slices/cartSlice.js';

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        cart: cartSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
})


export default store;