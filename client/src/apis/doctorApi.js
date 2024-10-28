import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../utils/baseUrl'

export const doctorApi = createApi({
  reducerPath: 'doctorApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api`,
    credentials: 'include'
  }),
  endpoints: (builder) => ({

    addDoctor: builder.mutation({
      query: (formData) => ({
        url: '/addDoctor',
        method: 'POST',
        body: formData
      }),
      invalidatesTags: ['Doctor']
    }),
    editDoctor: builder.mutation({
      query: ({ id, data }) => ({
        url: `/editDoctor/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Doctor'],
    }),
    getAllDoctor: builder.query({
      query: () => ({
        url: '/getAllDoctor',
        method: 'GET'
      }),
      providesTags: ['Doctor']
    }),
    deleteDoctor: builder.mutation({
      query: (id) => ({
        url: `/deleteDoctor/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Doctor']
    }),
    getDoctorById: builder.query({
      query: (id) => ({
        url: `/getDoctorById/${id}`,
        method: 'GET'
      }),
      providesTags: ['Doctor']
    }),
  })
})

export const { useAddDoctorMutation, useEditDoctorMutation, useGetAllDoctorQuery, useDeleteDoctorMutation, useGetDoctorByIdQuery } = doctorApi