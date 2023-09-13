import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithRoomService } from "./baseQuery";

export const discountApi = createApi({
  reducerPath: "discountApi",
  baseQuery: baseQueryWithRoomService,
  endpoints: (builder) => ({
    getDiscountByCode: builder.query({
      query: (code) => `discounts?name=${code}`,
    }),
  }),
});

export const { useGetDiscountByCodeQuery ,useLazyGetDiscountByCodeQuery} = discountApi;