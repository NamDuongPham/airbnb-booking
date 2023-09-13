import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithoutAuth } from './baseQuery';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithoutAuth,
  endpoints: builder => ({
    login: builder.mutation({
      query: (params: { email: string; password: string }) => ({
        url: '/login',
        method: 'POST',
        body: params,
      }),
    }),
    register: builder.mutation({
      query: (params: { email: string; password: string }) => ({
        url: '/register',
        method: 'POST',
        body: params,
      }),
    }),
  }),
});

export const { useLoginMutation ,useRegisterMutation} = authApi;
