"use client";

import { Container, Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { FavoriteListHeader } from "./components/FavoriteListHeader";
import { TrackComponent } from "./components/TrackComponent";

export default function Page() {
  const { favoriteTracks } = useSelector((state) => state.favorites);
  console.log("favPage", favoriteTracks);
  return (
    <Container maxWidth="xl" sx={{ pt: "100px", pb: "250px", mt: 4 }}>
      <Typography sx={{ my: 10 }} variant="h4">
        Favorite tracks
      </Typography>
      <FavoriteListHeader />
      <Divider variant="middle" sx={{ mb: 5 }} />

      {favoriteTracks.length > 0 &&
        favoriteTracks.map((track) => <TrackComponent track={track} />)}
    </Container>
  );
}
