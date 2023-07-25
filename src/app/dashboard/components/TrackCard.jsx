import { Card, CardMedia, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setTrackDetailInformation } from "../../state/services/thunks";
import { FavoriteButton } from "./FavoriteButton";

export const TrackCard = ({ track }) => {
  const dispatch = useDispatch();

  const handelUpdate = () => {
    dispatch(setTrackDetailInformation(track));
  };

  return (
    <Card
      sx={{ width: 300, backgroundColor: "#121640" }}
      onClick={() => handelUpdate()}
    >
      <Link
        href={{
          pathname: `details/${track.id}`,
        }}
        passHref
        style={{ textDecoration: "none" }}
      >
        <CardMedia
          component="img"
          image={track.album.imageUrl}
          alt="Live from space album cover"
        />
      </Link>

      <Grid container direction="row" sx={{ p: 10 }}>
        <Grid item container direction="column" xs={10}>
          <Grid item>
            <Typography fontWeight="bold" variant="h3">
              {track.name}
            </Typography>
          </Grid>

          <Grid item>
            {track.artists.length > 0 && (
              <Typography variant="h6">{track.artists[0].name}</Typography>
            )}
          </Grid>
        </Grid>

        <Grid item container xs={2} alignItems="center" justifyContent="center">
          <Grid item>
            <FavoriteButton track={track} />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
