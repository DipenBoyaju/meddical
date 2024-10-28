import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../utils/baseUrl'

export const departmentApi = createApi({
  reducerPath: 'departmentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api`,
    credentials: 'include'
  }),
  endpoints: (builder) => ({

    createDepartment: builder.mutation({
      query: (formData) => ({
        url: '/createDepartment',
        method: 'POST',
        body: formData
      }),
      invalidatesTags: ['Department']
    }),
    editDepartment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/editDepartment/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Department'],
    }),
    getAllDepartment: builder.query({
      query: () => ({
        url: '/getAllDepartment',
        method: 'GET'
      }),
      providesTags: ['Department']
    }),
    deleteDepartment: builder.mutation({
      query: (id) => ({
        url: `/deleteDepartment/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Department']
    }),
    getDepartmentById: builder.query({
      query: (id) => ({
        url: `/getDepartmentById/${id}`,
        method: 'GET'
      }),
      providesTags: ['Department']
    })
  })
})

export const { useCreateDepartmentMutation, useEditDepartmentMutation, useDeleteDepartmentMutation, useGetAllDepartmentQuery, useGetDepartmentByIdQuery } = departmentApi