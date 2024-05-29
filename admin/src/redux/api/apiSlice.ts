import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Production URL
export const baseUrl = "https://olmm-server.vercel.app/api/v1";

// Development URL
// export const baseUrl = "http://localhost:5000/api/v1";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  tagTypes: ["username", "userId", "menu", "price", "data"],

  endpoints: () => ({}),
});
