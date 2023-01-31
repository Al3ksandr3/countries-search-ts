import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const themeModeSlice = createSlice({
  initialState: "light",
  name: "@@themeMode",
  reducers: {
    setThemeMode: (_, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const themeModeReducer = themeModeSlice.reducer;

export const { setThemeMode } = themeModeSlice.actions;
