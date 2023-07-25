import {
  Box,
  Container,
  Grid,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useSpotifyTopList } from "../hooks/useSpotifyTopList";
import { TrackCard } from "./components/TrackCard";

export const DashboardPage = () => {
  const { isLoading, topTrackList } = useSpotifyTopList(
    "37i9dQZEVXbMDoHDwVN2tF"
  );

  const [query, setQuery] = useState("");

  if (isLoading) {
    return (
      <Container
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      ></Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ pt: "100px", pb: "250px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          mt: "2rem",
        }}
      >
        <img
          style={{ width: 50, height: 50, mx: "1rem" }}
          src="./images/lupa.png"
          alt="logo"
        />
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            width: 500,
            mx: "1rem",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search your song"
            onChange={(e) => setQuery(e.target.value)}
          />
        </Paper>
      </Box>
      <Typography
        variant="h2"
        sx={{ mb: 3, mt: 10 }}
        style={{ fontWeight: "bold" }}
      >
        🌎 Top global
      </Typography>

      <Grid container sx={{ mt: 10 }}>
        {topTrackList
          .filter((track) => track.name.toLowerCase().includes(query))
          .map((item) => (
            <Grid
              item
              key={item.id}
              display="flex"
              sm={6}
              md={3}
              sx={{ mb: "2rem" }}
            >
              <TrackCard track={item} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};
