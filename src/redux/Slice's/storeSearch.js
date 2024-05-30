import { createSlice } from "@reduxjs/toolkit";

const searchStore = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    storeSeach: (state, action) => {
      state = action.payload;
      console.log(state);
    },
  },
});

export const { storeSeach } = searchStore.actions;
export default searchStore.reducer;
