import { configureStore } from "@reduxjs/toolkit";
import gamesSlice from "./games-slice";

const store = configureStore({
  reducer: {
    games: gamesSlice.reducer,
  },
});

export default store;
