import { setTrack } from "../trackSlice";

export const setTrackDetailInformation = (track) => {
  return async (dispatch) => {
    dispatch(setTrack(track));
  };
};
