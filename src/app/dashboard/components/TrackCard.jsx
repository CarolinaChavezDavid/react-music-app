import {
  Box,
  Card,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTrackDetailInformation } from "../../state/services/thunks";
import { FavoriteButton } from "./FavoriteButton";

export const TrackCard = ({ track }) => {
  const dispatch = useDispatch();

  const [imageLoaded, setimageLoaded] = useState(false);

  const handelUpdate = () => {
    dispatch(setTrackDetailInformation(track));
  };

  const onImageLoaded = () => {
    setimageLoaded(!imageLoaded);
  };

  return (
    <Card
      className=" animate__animated animate__fadeInLeft"
      sx={{
        width: 300,
        backgroundColor: "#121640",
        boxShadow: "0px 13px 48px 14px rgba(0,0,0,0.1)",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      onClick={handelUpdate}
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
          onLoad={onImageLoaded}
          alt="Live from space album cover"
          sx={{
            width: 300,
            height: 300,
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        {!imageLoaded && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
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
    </Card>
  );
};
