import { apiSlice } from './apiSlice.js';
import { db } from '../firebase/firebase.js';

import { getDocs, collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            queryFn: async () => {
                try {
                    const data = await getDocs(collection(db, 'Products'));

                    const [datos, loading, err] = useCollectionData(data);
/* 
                    let data = [];

                    docs.forEach((product) => {
                        data.push({...product.data(), id: product.id});
                    }); */

                    return { datos }
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