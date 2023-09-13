import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithRoomService } from "./baseQuery";

export const hostApi = createApi({
  reducerPath: "hostApi",
  baseQuery: baseQueryWithRoomService,
  endpoints: (builder) => ({
    getHostById: builder.query({
      query: (id) => `hosts/${id}`,
    }),
  }),
});

export const { useGetHostByIdQuery } = hostApi;