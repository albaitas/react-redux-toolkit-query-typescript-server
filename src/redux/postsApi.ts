import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ID } from './../types';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (build) => ({
    getAllPosts: build.query({
      query: () => `posts`,
      providesTags: (result) => (result ? [...result.map(({ id }: ID) => ({ type: 'Posts' as const, id })), { type: 'Posts', id: 'LIST' }] : [{ type: 'Posts', id: 'LIST' }])
    }),

    addPost: build.mutation({
      query: (body) => ({
        url: `posts`,
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }]
    }),
    removePost: build.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Posts']
    }),
    updatePost: build.mutation({
      query: (post) => ({
        url: `posts/${post.id}`,
        method: 'PUT',
        body: post
      }),
      invalidatesTags: ['Posts']
    })
  })
});

export const { useGetAllPostsQuery, useAddPostMutation, useRemovePostMutation, useUpdatePostMutation } = postsApi;
