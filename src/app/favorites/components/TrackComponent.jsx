import { Avatar, Card, Grid, Typography } from "@mui/material";
import { FavoriteButton } from "../../dashboard/components/FavoriteButton";
import { AudioPlayer } from "../../details/[id]/components/AudioPlayer";
import { convertMstoMin } from "../../helpers/functions/convertMstoMin";

export const TrackComponent = ({ track }) => {
  return (
    <Card
      sx={{
        display: "flex",
        p: 5,
        bgcolor: "#F8F9FA",
        borderRadius: "20rem",
        my: 5,
      }}
    >
      <Grid container direction="row" justifyContent="left" alignItems="center">
        <Grid item sx={{ mr: "2rem" }}>
          <Avatar sx={{ width: 60, height: 60 }} src={track.album.imageUrl} />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">{track.name}</Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography variant="h6" sx={{ mr: 3 }}>
            {track.album.name}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">{track.album.releaseDate}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">{convertMstoMin(track.duration)}</Typography>
        </Grid>
        <Grid item xs={1}>
          <FavoriteButton track={track} />
        </Grid>
        {track.previewUrl && (
          <Grid item xs={1}>
            <AudioPlayer audioSrc={track.previewUrl} />
          </Grid>
        )}
      </Grid>
    </Card>
  );
};
