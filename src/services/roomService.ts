import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithRoomService } from "./baseQuery";
import { Room } from '../types/room';

export const typeRoomsApi = createApi({
  reducerPath: "typeRoomsApi",
  baseQuery: baseQueryWithRoomService,
  endpoints: (builder) => ({
    getTypeRooms: builder.query<Room[],void>({
      query: () => "typeRooms",
    }),
    getTypeRoomById: builder.query({
      query: (id) => `typeRooms/${id}`,
    }),
  }),
});

export const {useGetTypeRoomsQuery,useGetTypeRoomByIdQuery} = typeRoomsApi;