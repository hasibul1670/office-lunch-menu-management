import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const baseUrl= "https://emedicine.vercel.app/api/v1"
export const baseUrl = "http://localhost:5000/api/v1";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  tagTypes: ["username", "userId", "menu", "price", "data"],

  endpoints: () => ({}),
});
