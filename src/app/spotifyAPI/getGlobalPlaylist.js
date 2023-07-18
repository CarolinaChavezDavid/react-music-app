export const getGlobalPlaylist = async () => {
  const clientId = "6dc5649b893a4cd2bc212fd773710664";
  const clientSecret = "e8de0d5f1d3a463398418954f2a777ca";
  const apiEndpoint = "https://accounts.spotify.com/api/token";
  const playListEndPoint =
    "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF";

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

  const topTrackList = await fetch(apiEndpoint, authParameters)
    .then((result) => result.json())
    .then((data) => {
      var token = data.access_token;
      console.log(token);
      fetch(playListEndPoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + token,
        },
      })
        .then((result) => result.json())
        .then((data) => {
          console.log("response" + JSON.stringify(data));
          return data;
        });
    });

  return { topTrackList };
};
