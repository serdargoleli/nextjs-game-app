import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    categories: [
      "mmorpg",
      "shooter",
      "strategy",
      "moba",
      "racing",
      "sports",
      "social",
      "sandbox",
      " open-world",
      "survival",
      "pvp",
      "pve",
      "pixel",
      "voxel",
      "zombie",
      "turn-based",
      "first-person",
      "third-Person",
      "top-down",
      "tank",
      "space",
      "sailing",
      "side-scroller",
      "superhero",
      "permadeath",
      "card",
      "battle-royale",
      "mmo",
      "mmofps",
      "mmotps",
      "3d",
      "2d",
      "anime",
      "fantasy",
      "sci-fi",
      "fighting",
      "action-rpg",
      "action",
      "military",
      "martial-arts",
      "flight",
      "low-spec",
      "tower-defense",
      "horror",
      "mmorts",
    ],
    platform: ["pc", "browser", "all"],
    sorting: ["release-date", "popularity", "alphabetical", "relevance"],
  },
  reducers: {
    setGames: (state, actions) => {
      state.games = actions.payload;
    },
  },
});

export default gamesSlice;

export const gamesAction = gamesSlice.actions;
