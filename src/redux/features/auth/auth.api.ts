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
       
       userInfo: builder.query({
        query: () => ({
            url: "/user/me",
            method: 'GET',
            
        }),
          providesTags: ["USER"]
       })
    })
 })


 export const {useRegisterMutation, useLoginMutation, useLogoutMutation,useUserInfoQuery} = authApi