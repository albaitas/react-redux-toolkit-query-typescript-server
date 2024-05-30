import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from './../types';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (build) => ({
    getAllPosts: build.query<IPost[], void>({
      query: () => `posts`,
      providesTags: ['Posts']
    }),

    addPost: build.mutation<void, string>({
      query: (body) => ({
        url: `posts`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Posts']
    }),
    removePost: build.mutation<void, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Posts']
    }),
    updatePost: build.mutation<void, IPost>({
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
