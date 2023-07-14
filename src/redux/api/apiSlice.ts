import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
    }),
    getSingleBooks: builder.query({
      query: (id) => `/books/${id}`,
    }),
  }),
});

export const { useGetAllBooksQuery, useGetSingleBooksQuery } = api;
