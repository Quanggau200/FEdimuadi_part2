// src/store/baseApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from './store';

export const baseApi = createApi({
  reducerPath: 'api', 
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1', 
    credentials:"include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('Authorization', `${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}), 
});