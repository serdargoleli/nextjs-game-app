import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
  },
  reducers: {
    setGames: (state, actions) => {
      state.games = actions.payload;
    },
  },
});

export default gamesSlice;

export const gamesAction = gamesSlice.actions;
