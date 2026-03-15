import type { Profile, AuthResponse, Login, Register, ApiResponse } from "../../types/types";
import { baseApi } from "../../redux/baseQuery";
import { setCredentials, setProfile } from "../auth/authSlice";
import { message } from "antd";
export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ApiResponse<AuthResponse>, Login>({
      query: (credentials) => ({
        url: "authentication/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials({ token: data?.data?.access_token }));
          await dispatch(
            userApi.endpoints.getUser.initiate(undefined, {
              forceRefetch: true,
            }),
          );
        } catch (error:any) {
          message.error("Login Failed")
        }
      },
    }),
    register: builder.mutation<ApiResponse<AuthResponse>, Register>({
      query: (userData) => ({
        url: "authentication/create-new-user",
        method: "POST",
        body: userData,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials({ token: data.data.access_token }));
          await dispatch(userApi.endpoints.getUser.initiate());
        } catch (error) {
          message.error("Register Failed");
        }
      },
    }),
  }),
});
export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<ApiResponse<Profile>, void>({
      query: () => ({
        url: "authentication/profile",
        method: "GET",
      }),
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          try 
          {
            const {data}=await queryFulfilled;
            dispatch(setProfile(data.data))
          
          }
          catch(error)
          {
            message.error("Failed")
          }
        }
    }),
  }),
});
export const refreshTokenApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    refreshToken: builder.mutation<ApiResponse<AuthResponse>, void>({
      query: () => ({
        url: "authentication/refresh-token",
        method: "POST",
      }),
    }),
  }),

});

export const { useLoginMutation, useRegisterMutation } = authApi;
export const { useGetUserQuery, useLazyGetUserQuery } = userApi;
export const {useRefreshTokenMutation}=refreshTokenApi
