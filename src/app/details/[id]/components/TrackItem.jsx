import { Grid, Paper, Typography } from "@mui/material";
import { convertMstoMin } from "../../../helpers/functions/convertMstoMin";
import { AudioPlayer } from "./AudioPlayer";
export const TrackItem = (track) => {
  console.log("min", convertMstoMin(track.track.duration));

  return (
    <Paper
      elevation={0}
      sx={{
        height: 80,
        display: "flex",
        p: "1rem",
        bgcolor: "#F8F9FA",
        borderRadius: "1rem",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="center"
        sx={{ width: "100%" }}
        spacing={2}
      >
        <Grid item xs={4}>
          <Typography
            style={{ fontWeight: "bold", color: "#0B1147" }}
            variant="h4"
            sx={{ mr: 3 }}
          >
            🎵 {track.track.trackName}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h4" style={{ color: "#0B1147" }} sx={{ mr: 3 }}>
            {track.track.albumName}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h4" style={{ color: "#0B1147" }} sx={{ m: 3 }}>
            {track.track.releaseDate}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h4" style={{ color: "#0B1147" }} sx={{ m: 3 }}>
            {convertMstoMin(track.track.duration)}
          </Typography>
        </Grid>
        {track.track.previewUrl && (
          <Grid item xs={1}>
            <AudioPlayer audioSrc={track.track.previewUrl} />
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};
