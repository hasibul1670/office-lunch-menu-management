import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/user",
      providesTags: ["username"],
    }),
    createUser: builder.mutation({
      query: ({ data }) => ({
        url: `/user/create-user`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["username"],
    }),
    singleUser: builder.query({
      query: (id) => `/user/${id}`,
      providesTags: ["username", "username"],
    }),
    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["username"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useDeleteUserMutation,
  useCreateUserMutation,
  useSingleUserQuery,
} = userApi;
