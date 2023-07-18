import { useEffect, useState } from "react";

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

export const getTopTracksApi = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    fetch(apiEndpoint, authParameters)
      .then((result) => result.json())
      .then((data) => setToken(data.access_token));
  }, []);

  return { token };
};

export const getPlayListTracks = async ({ token }) => {
  const playListEndPoint =
    "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF";

  console.log("token received: " + token);

  const topListParameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + token,
    },
  };

  const topTrackList = await fetch(playListEndPoint, topListParameters)
    .then((result) => result.json())
    .then((data) => {
      return data;
    });

  console.log("response" + JSON.stringify(topTrackList));
  return { topTrackList };
};
