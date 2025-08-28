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
      query: () => ({
        url: "/transactions/withdraw",  
        method: "POST",
      }),
    }),
  }),
});

export const { useWalletQuery, useWithdrawMutation } = walletApi;
