import {fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {RootState} from "../types/types.ts";
import {message} from "antd";

const baseQuery = fetchBaseQuery({
    timeout:12000,
    baseUrl: "/api/v1",
    prepareHeaders:(headers,{getState}) => {
    const token=(getState() as RootState).auth.token;
    if(token){
        headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('Content-Type', 'application/json');
    return headers;
    },
    credentials:'include'
});
export default baseQuery;

export const baseQueryWithDynamicBaseUrl:typeof baseQuery = async(args, api,extraOptions) => {
    const state=api.getState() as RootState;
    const baseUrl=state?.system?.baseUrl || "http://localhost:8080" ;
    if(typeof args === "object"){
        args={
            ...args,
            url:`${baseUrl}${args.url}`,
        }
    }
    try {
        const result= await baseQuery(args,api,extraOptions);
        if(result.error){
            const err=result.error as any;
            const msg=(err?.data?.status?.label) || err?.data?.status?.message || " Đã xảy ra lỗi"
            message.error(err)
        }
        return result;
    }
    catch(error){
        message.error("Đã xảy ra lỗi ");
        return {error:error};
    }
}