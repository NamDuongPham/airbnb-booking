import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithRoomService } from "./baseQuery";
import { Booking } from "../types/booking";

export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: baseQueryWithRoomService,
  endpoints: (builder) => ({
    getBookings: builder.query<Booking[],void>({
      query: () =>
        `bookings`,
    }),
    getBookingByUser: builder.query({
      query: (userId) =>
        `bookings?userId=${userId}`,
    }),
    createBooking: builder.mutation<Booking,Omit<Booking,'id'>>({
      query: (data) => ({
          url: '/bookings', 
          method: 'POST',
          body: data
        }),
    }),
  }),
});

export const { useGetBookingsQuery,useGetBookingByUserQuery ,useCreateBookingMutation} = bookingApi;
