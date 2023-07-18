import { Container, Grid, Typography } from "@mui/material";
import {
  getCredentials,
  getPlayListTracks,
} from "../../spotifyAPI/getTopTracksAPI";
import { TrackCard } from "../components/TrackCard";

export const DashboardPage = () => {
  const topTrackList = getCredentials().then((token) => {
    return getPlayListTracks(token);
  });

  console.log("topTrackList" + JSON.stringify(topTrackList));

  return (
    <Container maxWidth="lg" align="center">
      <Typography variant="h4">Top global</Typography>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        {topTrackList &&
          topTrackList.map((track) => {
            return (
              <Grid item xs={6} key={track.id}>
                <TrackCard topTrackList={track} />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};
