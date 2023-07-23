import { useEffect, useState } from "react";
import { getTrackList } from "../api/getTopTracksAPI";

export const useSpotifyTopList = () => {
  const [topTrackList, setTopTrackList] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getPlayList = async () => {
    const response = await getTrackList();

    setTopTrackList(response);
    setisLoading(false);
  };

  useEffect(() => {
    getPlayList();
  }, []);

  return { isLoading, topTrackList };
};
