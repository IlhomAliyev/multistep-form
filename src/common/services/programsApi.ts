import { jsonMockApi } from "@/app/api";
import { Program } from "../types";

export const programsApi = jsonMockApi.injectEndpoints({
  endpoints: (builder) => ({
    getPrograms: builder.query<Program[], void>({
      query: () => "/programs",
    }),
    getProgramById: builder.query<Program, number>({
      query: (id) => `/programs/${id}`,
    }),
    createProgram: builder.mutation<Program, Program>({
      query: (program) => ({
        url: "/programs",
        method: "POST",
        body: program,
      }),
    }),
  }),
});

export const {
  useGetProgramsQuery,
  useGetProgramByIdQuery,
  useCreateProgramMutation,
} = programsApi;
