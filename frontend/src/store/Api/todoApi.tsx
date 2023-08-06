import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const todoApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3004",
  }),
  tagTypes: ["todo"],
  endpoints: (build) => ({
    getAllTodos: build.query({
      query: () => ({ url: `/todos` }),
      providesTags: [{ type: "todo", id: "LIST" }],
    }),
    getSingleTodo: build.query({
      query: (id) => ({ url: `/todo/${id}` }),
      providesTags: [{ type: "todo", id: "LIST" }],
    }),
    addTodo: build.mutation({
      query: (newTodo) => ({
        url: "/todos",
        method: "POST",
        body: newTodo,
      }),
      invalidatesTags: [{ type: "todo", id: "LIST" }],
    }),
    updateTodo: build.mutation({
      query: ({ id, data }) => ({
        url: `/todo/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [{ type: "todo", id: "LIST" }],
    }),
    updateTodoCompletion: build.mutation({
      query: ({ id, newTodoStatus }) => ({
        url: `/todo/${id}/completion`,
        method: "PUT",
        body: newTodoStatus,
      }),
      invalidatesTags: [{ type: "todo", id: "LIST" }],
    }),
    deleteTodo: build.mutation({
      query: (id) => ({
        url: `/todo/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "todo", id: "LIST" }],
    }),
  }),
});
export const {
  useGetAllTodosQuery,
  useAddTodoMutation,
  useGetSingleTodoQuery,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
  useUpdateTodoCompletionMutation,
} = todoApi;
