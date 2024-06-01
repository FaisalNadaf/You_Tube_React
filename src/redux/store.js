import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slice's/appSlice";
import searchSlice from "./Slice's/searchSlice";
import searchStore from "./Slice's/storeSearch";
import liveChatSlice from "./Slice's/liveChatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    cache: searchSlice,
    search: searchStore,
    chat: liveChatSlice,
  },
});

export default store;
