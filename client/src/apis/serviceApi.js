import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../utils/baseUrl'

export const serviceApi = createApi({
  reducerPath: 'serviceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api`,
    credentials: 'include'
  }),
  endpoints: (builder) => ({

    createService: builder.mutation({
      query: (formData) => ({
        url: '/createService',
        method: 'POST',
        body: formData
      }),
      invalidatesTags: ['Service']
    }),
    editService: builder.mutation({
      query: ({ id, data }) => ({
        url: `/editService/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Service'],
    }),
    getAllService: builder.query({
      query: () => ({
        url: '/getAllServices',
        method: 'GET'
      }),
      providesTags: ['Service']
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/deleteService/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Service']
    }),
    getServiceById: builder.query({
      query: (id) => ({
        url: `/getServiceById/${id}`,
        method: 'GET'
      }),
      providesTags: ['Service']
    }),

    searchService: builder.query({
      query: (query) => ({
        url: `/searchService?query=${query}`,
        method: 'GET'
      }),
      providesTags: ['Service']
    })

  })
})

export const { useCreateServiceMutation, useGetAllServiceQuery, useEditServiceMutation, useDeleteServiceMutation, useGetServiceByIdQuery, useSearchServiceQuery } = serviceApi