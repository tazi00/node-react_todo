import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    singleTodo: 0,
    completed: false,
    filterCompleted: "all",
    searchText: "",
    priority: "",
    tag: "",
    sortBy: "",
    sortOrder: "",
  },
  reducers: {
    setSingleTodo: (state, action) => {
      state.singleTodo = action.payload;
    },
    setChecked: (state, action) => {
      state.completed = !state.completed;
    },
    setFilterCompleted: (state, action) => {
      state.filterCompleted = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setPriority: (state, action) => {
      state.priority = action.payload;
    },
    setTag: (state, action) => {
      state.tag = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});

export const {
  setSingleTodo,
  setChecked,
  setFilterCompleted,
  setSearchText,
  setPriority,
  setTag,
  setSortBy,
  setSortOrder,
} = todoSlice.actions;

export default todoSlice.reducer;
