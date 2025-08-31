import { baseApi } from "@/redux/base.api";

const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    wallet: builder.query({
      query: (walletId: string) => ({
        url: `/wallets/me/${walletId}`,
        method: "GET",
      }),
      providesTags: ["WALLET"], 
    }),

    history: builder.query({
      query: (params) => ({
        url: "/transactions/me",
        method: "GET",
        params,
      }),
      providesTags: ["WALLET"], 
    }),

    allTransaction: builder.query({
      query: () => ({
        url: "/transactions",
        method: "GET",
      }),
      providesTags: ["WALLET"], 
    }),

    sendMoney: builder.mutation({
      query: (body) => ({
        url: "/transactions/send-money",
        method: "POST",
        body,
      }),
      invalidatesTags: ["WALLET"], 
    }),

    withdraw: builder.mutation({
      query: (userInfo) => ({
        url: "/transactions/withdraw",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["WALLET"],
    }),

    cashIn: builder.mutation({
      query: (userInfo) => ({
        url: "/transactions/cash-in",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["WALLET"],
    }),

    
    cashOut: builder.mutation({
      query: (userInfo) => ({
        url: "/transactions/cash-out",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["WALLET"],
    }),

    
    updateWallet: builder.mutation({
  query: ({ walletId, status }) => ({
    url: `/wallets/block/${walletId}`,
    method: "PATCH",
    body: { status },
  }),
  invalidatesTags: ["WALLET"],
}),

  }),
});

export const {
  useWalletQuery,
  useWithdrawMutation,
  useSendMoneyMutation,
  useHistoryQuery,
  useCashInMutation,
  useCashOutMutation,
  useAllTransactionQuery,
  useUpdateWalletMutation,
} = walletApi;
