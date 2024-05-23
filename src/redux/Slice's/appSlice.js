import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    toggle: "true",
  },
  reducers: {
    toggleMenu: (state) => {
      state.toggle = !state.toggle;
    },
    closeMenu: (state) => {
      state.toggle = false;
    },
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;

export default appSlice.reducer;
