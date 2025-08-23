// base.api.ts file এ
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from "@/config";

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseUrl,
    credentials: 'include', 
  }),
   tagTypes: ["USER"],
  endpoints: () => ({}),
});