import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseQuerryWithoutAuth } from "./BaseQuerry";

export const authAPI = createApi({
    reducerPath:"authAPI",
  baseQuery: BaseQuerryWithoutAuth,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (params: { email: string; password: string }) => ({
        url: "/login",
        method: "POST",
        body:params,
      }),
    }),
  }),
});
export const {useLoginMutation}= authAPI
