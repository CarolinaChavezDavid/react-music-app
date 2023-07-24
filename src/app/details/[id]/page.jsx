"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import useArtistTopTracks from "../../hooks/useArtistTopTracks";
import { ArtistGeneres } from "./components/ArtistGeneres";
import { ArtistTopTracks } from "./components/ArtistTopTracks";
import { DetailHeader } from "./components/DetailHeader";
import { PlayCard } from "./components/PlayCard";

export default function Page() {
  // `${track.artists[0].id}`
  const track = useSelector((state) => state.track);
  console.log("tracls", track);
  const { artistTrackList, isLoading } = useArtistTopTracks(
    track.artists[0].id
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
          <Box>
            <PlayCard key={track.id} track={track} />

            <Typography variant="h4" sx={{ mb: 3, my: 10, fontWeight: "bold" }}>
              Genres
            </Typography>
            <ArtistGeneres generes={artistTrackList.genres} />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Typography variant="h4" sx={{ mb: 10, fontWeight: "bold" }}>
              Top tracks
            </Typography>
            <ArtistTopTracks tracks={artistTrackList.tracks} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
