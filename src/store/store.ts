import { configureStore } from "@reduxjs/toolkit";
import { themeModeReducer } from "./features/themeMode/themeModeSlice";

export const store = configureStore({
  devTools: true,
  reducer: {
    themeMode: themeModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatcher = typeof store.dispatch;
