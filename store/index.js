import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterState";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
