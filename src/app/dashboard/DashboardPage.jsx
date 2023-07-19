import { Container, Grid, Typography } from "@mui/material";
import { topTrackListSpotify } from "../spotifyAPI/TopTrackListSpotify";
import { TrackCard } from "./components/TrackCard";

export const DashboardPage = () => {
  const tracks = topTrackListSpotify;

  return (
    <Container maxWidth="xl" sx={{ pt: "100px", pb: "250px" }}>
      <Typography variant="h4" sx={{ mb: 3, mt: 3 }}>
        Top global
      </Typography>

      <Grid sx={{ flexGrow: 1 }} container spacing={{ xs: 2, md: 3 }}>
        {tracks.map((item) => (
          <Grid key={item.id} item xs={1} sm={1} md={2}>
            <TrackCard topTrackList={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
