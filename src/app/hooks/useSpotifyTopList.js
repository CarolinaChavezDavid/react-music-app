import { useEffect, useState } from "react";

const PLAYLIST_ENDPOINT =
  "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF";

export const useSpotifyTopList = () => {
  const [topTrackList, setTopTrackList] = useState([]);

  const getPlayList = async () => {
    const token = await getCredentials();
    console.log("token", token);
    const response = await fetch(PLAYLIST_ENDPOINT, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      const finalTracks = jsonResponse.tracks.items.map((item) => ({
        id: item.track.id,
        name: item.track.name,
        album: transformAlbum(item.track.album),
        artists: transFormArtist(item.track.artists),
        duration: item.track.duration_ms,
        previewUrl: item.track.preview_url,
      }));

      setTopTrackList(finalTracks);
    }
  };

  useEffect(() => {
    getPlayList();
  }, []);

  return topTrackList;
};

const transformAlbum = (album) => {
  return {
    id: album.id,
    name: album.name,
    albumType: album.album_type,
    artist: transFormArtist(album.artists),
    releaseDate: album.release_date,
    imageUrl: album.images[0].url,
  };
};

const transFormArtist = (artists) => {
  return artists.map((element) => ({
    id: element.id,
    name: element.name,
  }));
};
