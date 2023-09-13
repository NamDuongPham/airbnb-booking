import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithRoomService } from "./baseQuery";
import { Comment } from '../types/comment';


export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: baseQueryWithRoomService,
  endpoints: (builder) => ({
    getComments: builder.query<Comment[],void>({
        query: () => "comments",
      }),
    getCommentById: builder.query({
      query: (id) => `comments/${id}`,
    }),
    addComment: builder.mutation({
      query: (newComment) => ({
        url: 'comments',
        method: 'POST',
        body: newComment,
      }),
    }),
  }),
});

export const { useGetCommentsQuery,useGetCommentByIdQuery,useAddCommentMutation } = commentApi;