import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterState";
import gamesSlice from "./games-slice";

const store = configureStore({
  reducer: {
    games: gamesSlice.reducer,
  },
});

export default store;
