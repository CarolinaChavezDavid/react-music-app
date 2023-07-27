import { Grid, Paper, Typography } from "@mui/material";
import { convertMstoMin } from "../../../helpers/functions/convertMstoMin";
import { AudioPlayer } from "./AudioPlayer";
export const TrackItem = (track) => {
  return (
    <Paper
      elevation={0}
      sx={{
        height: 80,
        p: "1rem",
        bgcolor: "#F8F9FA",
        borderRadius: "1rem",
      }}
    >
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={4}>
          <Typography
            style={{ fontWeight: "bold", color: "#0B1147" }}
            variant="h4"
          >
            🎵 {track.track.trackName}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h4" style={{ color: "#0B1147" }}>
            {track.track.albumName}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h4" style={{ color: "#0B1147" }}>
            {track.track.releaseDate}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h4" style={{ color: "#0B1147" }}>
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
