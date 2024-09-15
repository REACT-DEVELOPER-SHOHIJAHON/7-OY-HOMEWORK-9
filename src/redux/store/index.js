import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/index";
import authReducer from "../slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
