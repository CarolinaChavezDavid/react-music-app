import { Container, Grid, Typography } from "@mui/material";
import { useSpotifyTopList } from "../hooks/useSpotifyTopList";
import { TrackCard } from "./components/TrackCard";

export const DashboardPage = () => {
  const { isLoading, topTrackList } = useSpotifyTopList();

  if (isLoading) {
    return (
      <Container
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      ></Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ pt: "100px", pb: "250px" }}>
      <Typography variant="h4" sx={{ mb: 3, mt: 10 }}>
        Top global
      </Typography>

      <Grid container sx={{ mt: 10 }}>
        {topTrackList.map((item) => (
          <Grid item key={item.id} display="flex" sm={6} md={3}>
            <TrackCard track={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
