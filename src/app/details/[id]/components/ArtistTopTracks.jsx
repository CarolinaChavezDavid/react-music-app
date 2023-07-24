import { Card, Grid } from "@mui/material";
import { TrackItem } from "./TrackItem";

export const ArtistTopTracks = (tracks) => {
  return (
    <Card sx={{ borderRadius: "16px", p: 5 }}>
      <Grid container direction="column" spacing={4}>
        {tracks.tracks.map((item) => (
          <Grid item key={item.id}>
            <TrackItem track={item} />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};
