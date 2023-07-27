import { Card, CardMedia, Grid, Typography, styled } from "@mui/material";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setTrackDetailInformation } from "../../state/services/thunks";
import { FavoriteButton } from "./FavoriteButton";

export const TrackCard = ({ track }) => {
  const dispatch = useDispatch();

  const handelUpdate = () => {
    dispatch(setTrackDetailInformation(track));
  };

  const TrackCard = styled(Card)(({ theme }) => ({
    backgroundColor: "#121640",
    textTransform: "none",
    width: "300",
    boxShadow: "0px 13px 48px 14px rgba(0,0,0,0.1)",
  }));

  return (
    <TrackCard
      sx={{
        width: "300px",
        backgroundColor: "#121640",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      onClick={handelUpdate}
      className=" animate__animated animate__fadeInLeft"
    >
      <Link
        href={{
          pathname: `details/${track.id}`,
        }}
        passHref
      >
        <CardMedia
          component="img"
          image={track.album.imageUrl}
          alt="Live from space album cover"
        />
      </Link>

      <Grid container direction="row" sx={{ p: "1rem" }}>
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
    </TrackCard>
  );
};
