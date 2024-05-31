import { createSlice } from "@reduxjs/toolkit";

const searchStore = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    storeSeach: (state, action) => {
      return action.payload;
    },
  },
});

export const { storeSeach } = searchStore.actions;
export default searchStore.reducer;
