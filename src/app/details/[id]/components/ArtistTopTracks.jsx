import { Card, Grid } from "@mui/material";
import { TrackItem } from "./TrackItem";

export const ArtistTopTracks = (tracks) => {
  return (
    <Card sx={{ borderRadius: "16px", p: 5 }}>
      <Grid container direction="column" spacing={5} xs={12}>
        {tracks.tracks.map((item) => (
          <Grid item key={item.id} display="flex">
            <TrackItem track={item} />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};
