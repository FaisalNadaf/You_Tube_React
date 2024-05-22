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
  },
});

export const { toggleMenu } = appSlice.actions;

export default appSlice.reducer;
