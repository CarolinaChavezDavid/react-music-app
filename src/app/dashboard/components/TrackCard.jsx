import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardMedia, Grid, Typography } from "@mui/material";

export const TrackCard = ({ topTrackList }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image="./AlbumCover.jpeg"
        alt="Live from space album cover"
      />

      <Grid container direction="column" sx={{ p: 1 }}>
        <Grid item container direction="row">
          <Grid item xs={10}>
            <Typography variant="h4">{topTrackList.name}</Typography>
          </Grid>
          <Grid item xs={2}>
            <FontAwesomeIcon icon={faHeart} style={{ color: "#627737" }} />
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h6">{topTrackList.artist[0].name}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};
