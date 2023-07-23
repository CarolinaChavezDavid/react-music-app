import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Card, Grid, Typography } from "@mui/material";

export const TrackComponent = ({ track }) => {
  return (
    <Card
      sx={{ display: "flex", p: 1, bgcolor: "#F8F9FA", borderRadius: "20rem" }}
    >
      <Grid container direction="row" justifyContent="left" alignItems="center">
        <Grid item xs={1} sx={{ ml: 2 }}>
          <Avatar sx={{ width: 60, height: 60 }} src={track.album.imageUrl} />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" sx={{ mr: 3 }}>
            {track.name}
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography variant="h6" sx={{ mr: 3 }}>
            {track.album.name}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" sx={{ m: 3 }}>
            {track.album.releaseDate}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" sx={{ m: 3 }}>
            {track.duration}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "#121640", fontSize: "2rem" }}
          />
        </Grid>
      </Grid>
    </Card>
  );
};
