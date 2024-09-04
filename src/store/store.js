import { configureStore } from "@reduxjs/toolkit";
import {
  authSlice,
  uiSlice,
  equipoSlice,
  clienteSlice,
} from "./";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    equipo: equipoSlice.reducer,
    cliente: clienteSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
