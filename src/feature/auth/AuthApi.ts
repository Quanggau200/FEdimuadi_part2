import type { Profile, AuthResponse, Login, Register } from "../../types/types";
import { baseApi } from "../../redux/baseQuery";
import { setCredentials } from "../auth/authSlice";
import { message } from "antd";
export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, Login>({
      query: (credentials) => ({
        url: "authentication/user-login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setCredentials({ token: data.access_token }));
          await dispatch(
            userApi.endpoints.getUser.initiate(undefined, {
              forceRefetch: true,
            }),
          );
        } catch (error) {
          message.error("Login Failed");
        }
      },
    }),
    register: builder.mutation<AuthResponse, Register>({
      query: (userData) => ({
        url: "authentication/create-new-user",
        method: "POST",
        body: userData,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials({ token: data.access_token }));
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
    getUser: builder.query<Profile, void>({
      query: () => ({
        url: "authentication/profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
export const { useGetUserQuery, useLazyGetUserQuery } = userApi;
