import { configureStore } from "@reduxjs/toolkit";
import { favoriteTracksSlice } from "../favoritesTracksSlice";
import { trackSlice } from "../trackSlice";

export const store = configureStore({
  reducer: {
    track: trackSlice.reducer,
    favorites: favoriteTracksSlice.reducer,
  },
});
