import { ADD_FAVORITE_SONG } from "./actionsTypes";

export const actionAddFavorite = (data) => {
  return {
    type: ADD_FAVORITE_SONG,
    payload: data,
  };
};
