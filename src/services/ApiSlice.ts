import { createApi } from '@reduxjs/toolkit/query/react';
import  {baseQueryWithDynamicBaseUrl} from "../untils/BaseQuery.ts";


export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery:baseQueryWithDynamicBaseUrl,
    tagTypes:['User'],
    keepUnusedDataFor:0,
    refetchOnReconnect:true,
    endpoint:() => ({}),
})