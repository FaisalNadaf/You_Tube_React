import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "cache",
  initialState: {},
  reducers: {
    storeCache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
 
  },
});

export const { storeCache, storeSeach } = searchSlice.actions;
export default searchSlice.reducer;
