import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  album: "",
  artists: [],
  duration: "",
  previewUrl: "",
  isFavorit: false,
};

export const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    setTrack: (state, { payload }) => {
      state.id = payload.id;
      state.name = payload.name;
      state.album = payload.album;
      state.artists = payload.artists;
      state.duration = payload.duration;
      state.previewUrl = payload.previewUrl;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTrack } = trackSlice.actions;

export default trackSlice.reducer;
