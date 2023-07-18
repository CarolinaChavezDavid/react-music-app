import { useEffect, useState } from "react";
import { getPlayListTracks } from "./getTopTracksAPI";

export const getTopTracks = () => {
  const clientId = "6dc5649b893a4cd2bc212fd773710664";
  const clientSecret = "e8de0d5f1d3a463398418954f2a777ca";
  const apiEndpoint = "https://accounts.spotify.com/api/token";

  const authParameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "grant_type=client_credentials&client_id=" +
      clientId +
      "&client_secret=" +
      clientSecret,
  };

  const [token, setToken] = useState("");

  useEffect(() => {
    fetch(apiEndpoint, authParameters)
      .then((result) => result.json())
      .then((data) => setToken(data.access_token));
  }, []);

  const { topTrackList } = getPlayListTracks(token);

  return { topTrackList };
};
