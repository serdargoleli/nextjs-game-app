import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "icon",
  initialState: {
    counter: 1,
  },
  reducers: {
    inc: (state, actions) => {
      state.counter += actions.payload;
    },
  },
});

export default counterSlice;

export const counterAction = counterSlice.actions;
