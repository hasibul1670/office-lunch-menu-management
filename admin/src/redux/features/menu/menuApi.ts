import { api } from "../../api/apiSlice";

const MenuApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: () => "/menu/all-menu",
      providesTags: ["menu"],
    }),

    singleMenu: builder.query({
      query: (id) => `/menu/${id}`,
      providesTags: ["username"],
    }),

    createMenu: builder.mutation({
      query: ({ data }) => ({
        url: `/menu/create-menu`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["menu"],
    }),
    updateMenu: builder.mutation({
      query: ({ data, id }) => ({
        url: `/menu/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["menu"],
    }),
    deleteMenu: builder.mutation({
      query: ({ id }) => ({
        url: `/menu/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["menu"],
    }),
  }),
});

export const {
  useGetMenuQuery,
  useSingleMenuQuery,
  useCreateMenuMutation,
  useUpdateMenuMutation,
  useDeleteMenuMutation,
} = MenuApi;
