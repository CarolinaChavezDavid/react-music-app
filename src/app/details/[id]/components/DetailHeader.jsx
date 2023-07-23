import styled from "@emotion/styled";
import { Box, CardMedia, Grid, Rating, Typography } from "@mui/material";
import { useState } from "react";
import { ColorExtractor } from "react-color-extractor";

export const DetailHeader = (artist) => {
  const poster = artist.artist.artistImages[0].url;

  const [colors, setColors] = useState([]);

  const handleColorsExtracted = (colorPalette) => {
    setColors(colorPalette);
  };

  console.log("artistTrackList", JSON.stringify(artist));

  console.log("colors", colors);

  const CustomCardContent = styled(Box)(() => ({
    justifyContent: "center",
    alignContent: "flex-end",
    position: "relative",
    width: "100%",
    textAlign: "center",
    padding: "16px 10px 45px",
    zIndex: 1,
    minHeight: 300,
    background: `linear-gradient(90deg, ${colors[0]}, ${colors[5]})`,
  }));

  return (
    <Box sx={{ height: 300 }} justify="flex-end">
      <ColorExtractor src={poster} getColors={handleColorsExtracted} />
      <Grid container direction="row" style={{ width: "100%" }}>
        <Grid item xs={2}>
          <CardMedia
            component="img"
            image={poster}
            alt="Live from space album cover"
            sx={{ height: 300, width: 300 }}
          />
        </Grid>
        <Grid item xs={10} justify="flex-end">
          <CustomCardContent>
            <Typography variant="h1">{artist.artist.artistName}</Typography>
            <Rating name="customized-10" defaultValue={2} max={10} />
          </CustomCardContent>
        </Grid>
      </Grid>
    </Box>
  );
};
