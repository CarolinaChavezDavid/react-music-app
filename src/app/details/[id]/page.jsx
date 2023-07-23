"use client";
import { Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import useArtistTopTracks from "../../hooks/useArtistTopTracks";
import { ArtistTopTracks } from "./components/ArtistTopTracks";
import { DetailHeader } from "./components/DetailHeader";
import { PlayCard } from "./components/PlayCard";

export default function Page() {
  // `${track.artists[0].id}`
  const track = useSelector((state) => state.track);
  console.log("tracls", track);
  const { artistTrackList, isLoading } = useArtistTopTracks(
    "3Nrfpe0tUJi4K4DXYWgMUX"
  );

  console.log("artistList", artistTrackList);

  if (isLoading) {
    return (
      <Container
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      ></Container>
    );
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        pt: "100px",
        pb: "250px",
      }}
    >
      {artistTrackList && <DetailHeader artist={artistTrackList} />}
      <Grid container sx={{ mt: 10 }} spacing={15}>
        <Grid item xs={4}>
          <PlayCard key={track.id} track={track} />
        </Grid>
        <Grid item xs={8}>
          <ArtistTopTracks tracks={artistTrackList.tracks} />
        </Grid>
      </Grid>
    </Container>
  );
}
