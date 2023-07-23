import { Container, Grid, Typography } from "@mui/material";
import { topTrackListSpotify } from "../spotifyAPI/TopTrackListSpotify";
import { TrackCard } from "./components/TrackCard";

export const DashboardPage = () => {
  const tracks = topTrackListSpotify;

  return (
    <Container maxWidth="xl" sx={{ pt: "100px", pb: "250px" }}>
      <Typography variant="h4" sx={{ mb: 3, mt: 10 }}>
        Top global
      </Typography>

      <Grid container sx={{ mt: 10 }}>
        {tracks.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={3}>
            <TrackCard track={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
