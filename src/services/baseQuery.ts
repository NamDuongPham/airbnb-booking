import {  fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: headers => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
  cache: 'no-cache',
} );
export const baseQueryWithoutAuth = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  cache: 'no-cache',
} );

export const baseQueryWithRoomService = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
})

// export const baseQuery = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
//   const result = await baseQueryWithAuth( args, api, extraOptions );
//   return result;
// }
