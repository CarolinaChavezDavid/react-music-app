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

export const getCredentials = async () => {
  const token = await fetch(apiEndpoint, authParameters)
    .then((result) => result.json())
    .then((data) => {
      return data.access_token;
    });

  return token;
};

export const getPlayListTracks = async (token) => {
  const playListEndPoint =
    "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF";

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
      return data.tracks.items;
    });

  const tracks = topTrackList.map((item) => ({
    id: item.track.id,
    name: item.track.name,
    album: transformAlbum(item.track.album),
    artists: trasnFormArtist(item.track.artists),
    duration: item.track.duration_ms,
    previewUrl: item.track.preview_url,
  }));

  return tracks;
};

const transformAlbum = (album) => {
  return {
    id: album.id,
    name: album.name,
    albumType: album.album_type,
    artist: trasnFormArtist(album.artists),
    releaseDate: album.release_date,
    imageUrl: album.images[0].url,
  };
};

const trasnFormArtist = (artists) => {
  return artists.map((element) => ({
    id: element.id,
    name: element.name,
  }));
};
