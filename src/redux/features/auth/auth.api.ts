/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/base.api";

 

 export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
       register: builder.mutation({
        query: (userInfo) => ({
            url: "/user/register",
            method: 'POST',
            body: userInfo
        })
       }),
       login: builder.mutation({
        query: (userInfo) => ({
            url: "/auth/login",
            method: 'POST',
            body: userInfo
        })
       }),
       logout: builder.mutation({
        query: () => ({
            url: "/auth/logOut",
            method: 'POST',
        }),
        invalidatesTags: ["USER"]
       }),
       
       userData: builder.query({
        query: () => ({
            url: "/user",
            method: 'GET',
            
        }),
          providesTags: ["USER"]
       }),
       userInfo: builder.query({
        query: () => ({
            url: "/user/me",
            method: 'GET',
            
        }),
          providesTags: ["USER"]
       }),

      updateUserStatus: builder.mutation({
  query: ({ userId, status }) => ({
    url: `/user/${userId}/status`,   
    method: "PATCH",
    body: { status },             
  }),
  invalidatesTags: ["USER"],
}),





    })
 })


 export const {useRegisterMutation, useLoginMutation, useLogoutMutation,useUserInfoQuery,
 useUserDataQuery,
 useUpdateUserStatusMutation
   

 } = authApi