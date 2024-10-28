import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../utils/baseUrl'

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api`,
    credentials: 'include'
  }),
  endpoints: (builder) => ({

    createBlog: builder.mutation({
      query: (formData) => ({
        url: '/createBlog',
        method: 'POST',
        body: formData
      }),
      invalidatesTags: ['Blog']
    }),
    editBlog: builder.mutation({
      query: ({ id, data }) => ({
        url: `/editBlog/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Blog'],
    }),
    getAllBlog: builder.query({
      query: () => ({
        url: '/getAllBlog',
        method: 'GET'
      }),
      providesTags: ['Blog']
    }),
    getBlogById: builder.query({
      query: (id) => ({
        url: `/getBlogById/${id}`,
        method: 'GET'
      }),
      providesTags: ['Blog']
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/deleteBlog/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Blog']
    })
  })
})

export const { useCreateBlogMutation, useEditBlogMutation, useGetAllBlogQuery, useGetBlogByIdQuery, useDeleteBlogMutation } = blogApi