import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const DEFAULT_REQUEST_TIMEOUT = 10000;

export const jsonMockApi = createApi({
  reducerPath: "jsonMockApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["clients", "counries", "programs", "activities"],
  endpoints: () => ({}),
});
