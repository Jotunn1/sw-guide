import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: "dark",
  },
  reducers: {
    changeToWhite: (state) => {
      state.currentTheme = "white";
    },
    changeToDark: (state) => {
      state.currentTheme = "dark";
    },
  },
});

export const { changeToWhite, changeToDark } = themeSlice.actions;
export const selectTheme = (state: { theme: { currentTheme: any } }) =>
  state.theme.currentTheme;
export default themeSlice.reducer;
