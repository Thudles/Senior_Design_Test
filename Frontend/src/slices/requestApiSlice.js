import { get } from "mongoose";
import { apiSlice } from "./apiSlice";
const REQUEST_URL = "/api/request";

export const requestApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRequests: builder.query({
      query: () => ({
        url: `${REQUEST_URL}`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
    getUserRequests: builder.query({
      query: (userID) => ({
        url: `${REQUEST_URL}/${userID}`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetRequestsQuery, useGetUserRequestsQuery } = requestApiSlice;
