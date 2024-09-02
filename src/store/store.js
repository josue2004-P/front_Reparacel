import { configureStore } from "@reduxjs/toolkit";
import {
  authSlice,
  uiSlice,
  equipoSlice,
} from "./";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    equipo: equipoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
