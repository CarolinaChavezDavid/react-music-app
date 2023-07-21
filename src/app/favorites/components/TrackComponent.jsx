import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Card, Grid, Typography } from "@mui/material";
import { topTrackListSpotify } from "./TopTrackListSpotify";

export const TrackComponent = () => {
  const item = topTrackListSpotify[0];
  return (
    <Card
      sx={{ display: "flex", p: 1, bgcolor: "#F8F9FA", borderRadius: "20rem" }}
    >
      <Grid container direction="row" justifyContent="left" alignItems="center">
        <Grid item xs={1} sx={{ ml: 2 }}>
          <Avatar sx={{ width: 60, height: 60 }} src={item.album.imageUrl} />
        </Grid>
        <Grid item xs={3} spacing={3}>
          <Typography variant="h6" sx={{ mr: 3 }}>
            {item.name}
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography variant="h6" sx={{ mr: 3 }}>
            {item.album.name}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" sx={{ m: 3 }}>
            {item.album.releaseDate}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" sx={{ m: 3 }}>
            {item.duration}
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
