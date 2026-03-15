import { baseApi } from "../../redux/baseQuery";
import type { ApiResponse, Profile } from "../../types/types";
import { message } from "antd";
import { setProfile } from "../auth/authSlice";
export const accountApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation<ApiResponse<Profile>, Partial<Profile>>({
      query: (profile) => ({
        url: "authentication/update-user",
        method: "PUT",
        body: profile,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setProfile(data.data));
        } catch (error) {
          message.error("Update Profile Failed");
        }
      },
    }),
  }),
});
export const { useUpdateProfileMutation } = accountApi;