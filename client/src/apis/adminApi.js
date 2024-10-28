import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../utils/baseUrl'

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api`,
    credentials: 'include'
  }),
  endpoints: (builder) => ({

    adminLogin: builder.mutation({
      query: (formData) => ({
        url: '/login',
        method: 'POST',
        body: formData
      }),
      invalidatesTags: ['Admin']
    }),
    adminLogout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST'
      }),
      invalidatesTags: ['Admin']
    }),
    editPassword: builder.mutation({
      query: ({ id, password }) => ({
        url: `/changePassword/${id}`,
        method: 'PATCH',
        body: { password }
      }),
      invalidatesTags: ['Admin']
    }),
    changeImage: builder.mutation({
      query: ({ id, image }) => ({
        url: `/changeImage/${id}`,
        method: 'PATCH',
        body: { image }
      }),
      invalidatesTags: ['Admin']
    })
  })
})

export const { useAdminLoginMutation, useAdminLogoutMutation, useEditPasswordMutation, useChangeImageMutation } = adminApi