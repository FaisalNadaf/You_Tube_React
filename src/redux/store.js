import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slice's/appSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;
