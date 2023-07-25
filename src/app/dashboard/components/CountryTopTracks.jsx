import { Box, Container, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { useSpotifyTopList } from "../../hooks/useSpotifyTopList";
import { CountryTopTracksItem } from "./CountryTopTracksItem";

export const CountryTopTracks = ({ trackInfo }) => {
  const title = `${trackInfo.countryImage} Top 50 ${trackInfo.countryName}`;

  const { isLoading, topTrackList } = useSpotifyTopList(trackInfo.playListID);

  console.log("colombian tracks", topTrackList);

  const getTracksSubArray = () => {
    const incremental = 8;
    var index = 0;
    const subArray = [];
    while (index < 50) {
      subArray.push(topTrackList.slice(index, index + incremental));
      index += incremental;
    }

    return subArray;
  };

  const subArray = getTracksSubArray();
  console.log("subarray", subArray);

  return (
    <Container maxWidth="xl" sx={{ pb: "250px" }}>
      <Typography variant="h4" sx={{ mb: 3 }} style={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          mt: "2rem",
        }}
      >
        <Carousel>
          {getTracksSubArray().map((item) => (
            <div>
              <CountryTopTracksItem tracks={item} />
            </div>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};
