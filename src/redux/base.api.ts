// baseApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from "@/config"

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseUrl,
    credentials: 'include', 
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['USER', "WALLET"],
  endpoints: () => ({}),
})