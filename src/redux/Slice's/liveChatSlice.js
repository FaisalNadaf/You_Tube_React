import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.message.length > 20) {
        state.message.shift();
      }
      state.message.push(action.payload);
    },
  },
});

export const { addMessage } = LiveChatSlice.actions;
export default LiveChatSlice.reducer;
