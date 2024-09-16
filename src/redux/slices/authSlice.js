import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  token: localStorage.getItem("token"),
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      signUp: (state, action) => {
        state.token = action.payload.token;
        localStorage.setItem("token", state.token);
      },
      login: (state, action) => {
        state.token = action.payload.token;
        localStorage.setItem("token", state.token);
      },
      logOut: (state) => {
        state.token = null;
        localStorage.removeItem("token");
    },
  },
});

export const { logOut, login, signUp } = authSlice.actions;

export default authSlice.reducer;
