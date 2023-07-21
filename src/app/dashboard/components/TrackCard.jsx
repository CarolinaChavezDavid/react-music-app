import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardMedia, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setTrackDetailInformation } from "../../redux/services/thunks";

export const TrackCard = ({ topTrackList }) => {
  const dispatch = useDispatch();

  const handelUpdate = () => {
    dispatch(setTrackDetailInformation(topTrackList));
    console.log("track: " + JSON.stringify(topTrackList));
  };
  return (
    <Link
      href={{
        pathname: `details/${topTrackList.id}`,
      }}
      style={{ textDecoration: "none" }}
    >
      <Card onClick={() => handelUpdate()}>
        <CardMedia
          component="img"
          spacing={2}
          image={topTrackList.album.imageUrl}
          alt="Live from space album cover"
        />

        <Grid container direction="row" sx={{ p: 1 }}>
          <Grid item container direction="column" xs={10}>
            <Grid item>
              <Typography fontWeight="bold" variant="h6">
                {topTrackList.name}
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="h6">
                {topTrackList.artists[0].name}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "#121640", fontSize: "2rem" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Link>
  );
};
