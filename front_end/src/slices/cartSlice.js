import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from '../utils/cartUtils.js';

const initialState = localStorage.getItem('cartInfo') 
        ? JSON.parse(localStorage.getItem('cartInfo')) 
    : {cartItems: [], shippingAdress: []};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;

            const existItem = state.cartItems.find((x) => x.id === item.id);

            if(existItem) {
                state.cartItems = state.cartItems.map((x) => x.id === existItem.id ? item : x);
            } else {
                state.cartItems = [...state.cartItems, item];
            }

            return updateCart(state);
        },
        
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);

            return updateCart(state);
        },

        saveShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
            
            return updateCart(state);
        },

        savePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
            
            return updateCart(state);
        },

        clearCartItems: (state, action) => {
            state.cartItems = [];
            
            return updateCart(state);
        }
    },
});

export const { 
    addToCart,
    removeFromCart,
    saveShippingAddress,
    savePaymentMethod,
    clearCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;