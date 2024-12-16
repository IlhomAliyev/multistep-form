import { jsonMockApi } from "@/app/api";
import { Country } from "../types";

export const countriesApi = jsonMockApi.injectEndpoints({
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], void>({
      query: () => "/countries",
    }),
    getCountryById: builder.query<Country, number>({
      query: (id) => `/countries/${id}`,
    }),
    createCountry: builder.mutation<Country, Country>({
      query: (country) => ({
        url: "/countries",
        method: "POST",
        body: country,
      }),
    }),
  }),
});

export const {
  useGetCountriesQuery,
  useGetCountryByIdQuery,
  useCreateCountryMutation,
} = countriesApi;
