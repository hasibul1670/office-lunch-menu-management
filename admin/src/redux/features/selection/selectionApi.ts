import { api } from "../../api/apiSlice";

const SelectionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSelection: builder.query({
      query: () => "/selectItem/all-selectedItem",
      providesTags: ["userId"],
    }),

    createSelection: builder.mutation({
      query: ({ data }) => ({
        url: `selectItem/create-selectedItem`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["userId"],
    }),

 
  }),
});

export const {
 useGetSelectionQuery,
 useCreateSelectionMutation

} = SelectionApi;
