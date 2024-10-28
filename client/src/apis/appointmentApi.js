import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../utils/baseUrl'

export const appointmentApi = createApi({
  reducerPath: 'appointmentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api`,
    credentials: 'include'
  }),
  endpoints: (builder) => ({

    bookAppointment: builder.mutation({
      query: (formData) => ({
        url: '/bookAppointment',
        method: 'POST',
        body: formData
      }),
      invalidatesTags: ['Appointment']
    }),
    getAllAppointment: builder.query({
      query: () => ({
        url: '/getAllAppointment',
        method: 'GET'
      }),
      providesTags: ['Appointment']
    }),
  })
})

export const { useBookAppointmentMutation, useGetAllAppointmentQuery } = appointmentApi