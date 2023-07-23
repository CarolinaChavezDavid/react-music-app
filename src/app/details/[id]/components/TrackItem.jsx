import { Box, Grid, Typography } from "@mui/material";
import { AudioPlayer } from "./AudioPlayer";

export const TrackItem = (track) => {
  console.log("artist", track);

  return (
    <Box
      sx={{ display: "flex", p: 5, bgcolor: "#F8F9FA", borderRadius: "1rem" }}
    >
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Grid item xs={3}>
          <Typography variant="h6" sx={{ mr: 3 }}>
            {track.track.trackName}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" sx={{ mr: 3 }}>
            {track.track.albumName}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" sx={{ m: 3 }}>
            {track.track.releaseDate}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" sx={{ m: 3 }}>
            {track.track.duration}
          </Typography>
        </Grid>
        {track.track.previewUrl && (
          <Grid item xs={2}>
            <AudioPlayer audioSrc={track.track.previewUrl} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
