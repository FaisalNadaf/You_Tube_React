import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slice's/appSlice";
import searchSlice from "./Slice's/searchSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    cache: searchSlice,
    search: searchStore,
  },
});

export default store;
