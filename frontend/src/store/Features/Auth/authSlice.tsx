import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    auth: "login",

    userInfo: {},
  },
  reducers: {
    authChanger(state, action) {
      state.auth = action.payload;
    },
  },
});

export const { authChanger } = authSlice.actions;
// export default authReducer = authSlice.reducer;
