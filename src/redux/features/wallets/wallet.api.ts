import { baseApi } from "@/redux/base.api";

const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    wallet: builder.query({
      query: (walletId: string) => ({
        url: `/wallets/me/${walletId}`,  
        method: "GET",
      }),
    }),
    sendMoney: builder.mutation({
      query: (body) => ({
        url: "/transactions/send-money",  
        method: "POST",
        body
      }),
      invalidatesTags:["WALLET"]
    }),
    withdraw: builder.mutation({
      query: (userInfo) => ({
        url: "/transactions/withdraw",  
        method: "POST",
        body:userInfo
      }),
      invalidatesTags:["WALLET"]
    }),
  }),

});

export const { useWalletQuery, useWithdrawMutation,useSendMoneyMutation } = walletApi;
