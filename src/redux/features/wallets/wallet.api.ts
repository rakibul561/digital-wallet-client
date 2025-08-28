import { baseApi } from "@/redux/base.api";

const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    wallet: builder.query({
      query: (walletId: string) => ({
        url: `/wallets/me/${walletId}`,  
        method: "GET",
      }),
    }),
    withdraw: builder.mutation({
      query: (body) => ({
        url: "/transactions/withdraw",  
        method: "POST",
        body
      }),
      invalidatesTags:["WALLET"]
    }),
  }),

});

export const { useWalletQuery, useWithdrawMutation } = walletApi;
