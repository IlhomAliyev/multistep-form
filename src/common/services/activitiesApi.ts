import { jsonMockApi } from "@/app/api";
import { Activity } from "../types";

export const activitiesApi = jsonMockApi.injectEndpoints({
  endpoints: (builder) => ({
    getActivities: builder.query<Activity[], void>({
      query: () => "/activities",
    }),
    getActivityById: builder.query<Activity, number>({
      query: (id) => `/activities/${id}`,
    }),
    createActivity: builder.mutation<Activity, Activity>({
      query: (activity) => ({
        url: "/activities",
        method: "POST",
        body: activity,
      }),
    }),
  }),
});

export const {
  useGetActivitiesQuery,
  useGetActivityByIdQuery,
  useCreateActivityMutation,
} = activitiesApi;
