import { baseApi } from "@/redux/base.api";

 

 const authApi = baseApi.injectEndpoints({
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
       })
    })
 })


 export const {useRegisterMutation, useLoginMutation} = authApi