import { jsonMockApi } from "@/app/api";
import { Client, ClientResponse } from "../types";

export const clientsApi = jsonMockApi.injectEndpoints({
  endpoints: (builder) => ({
    getClients: builder.query<ClientResponse[], void>({
      providesTags: ["clients"],
      query: () => "/clients",
      transformResponse: (response: ClientResponse[]) =>
        [...response].reverse(),
    }),
    getClientById: builder.query<ClientResponse, number>({
      providesTags: ["clients"],
      query: (id) => `/clients/${id}`,
    }),
    createClient: builder.mutation<ClientResponse, Client>({
      invalidatesTags: ["clients"],
      query: (client) => ({
        url: "/clients",
        method: "POST",
        body: client,
      }),
    }),
    deleteClient: builder.mutation<ClientResponse, string>({
      invalidatesTags: ["clients"],
      query: (id) => ({
        url: `/clients/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetClientsQuery,
  useGetClientByIdQuery,
  useCreateClientMutation,
  useDeleteClientMutation,
} = clientsApi;
