import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constant';

const baseQuery = fakeBaseQuery();

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Product', 'Order', 'User'],
    endpoints: (builder) => ({}),
});