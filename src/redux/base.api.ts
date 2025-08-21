 import config from '@/config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

 export const baseApi = createApi({
    reducerPath: 'baseAPi',
    baseQuery: fetchBaseQuery({baseUrl: config.baseUrl}),
    endpoints : () => ({})
 })