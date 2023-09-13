import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithRoomService } from "./baseQuery";
import { Account } from "../types/account";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: baseQueryWithRoomService,
  endpoints: (builder) => ({
    getAccountById: builder.query({
      query: (id) => `accounts/${id}`,
    }),
    updateAccount: builder.mutation<Account, { id: number;userId:number; body: Account }>({
      query: (data) => ({
        url: `accounts/${data.id}`,
        method: "PUT",
        body: data.body,
      }),
    }),
    createAccount:builder.mutation<Account, Omit<Account,"id">>({
      query:(body)=>({
        url:'accounts',
        method:'POSt',
        body
      })
    })
  }),
});

export const { useGetAccountByIdQuery, useUpdateAccountMutation ,useLazyGetAccountByIdQuery ,useCreateAccountMutation} = accountApi;
