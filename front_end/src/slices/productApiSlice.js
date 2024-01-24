import { apiSlice } from './apiSlice.js';
import { db } from '../firebase/firebase.js';

import { getDocs, collection } from 'firebase/firestore';

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            queryFn: async () => {
                try {
                    const data = await getDocs(collection(db, 'Products'));
/* 
                    let data = [];

                    docs.forEach((product) => {
                        data.push({...product.data(), id: product.id});
                    }); */

                    return { data }
                } catch (err) {
                    return { err }
                }
            },
            providesTags: ['Product'],
            keepUnusedDataFor: 30,
        })
    })
});

export const {
    useGetProductsQuery,
} = productsApiSlice;