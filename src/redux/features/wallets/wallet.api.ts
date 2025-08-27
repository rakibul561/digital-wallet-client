import { baseApi } from "@/redux/base.api";

 
 
 const walletApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
       wallet: builder.query({
        query: (id:string) => ({
            url: "/me/register",
            method: `/me/${id}`,
            
        })
       }),
    })
 })


 export const {useWalletQuery} = walletApi