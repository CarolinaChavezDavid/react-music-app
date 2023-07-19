import { Box, Card, CardMedia, Container, Typography } from "@mui/material";

export const TrackDetail = ({ track }) => {
  return (
    <Container maxWidth="xl" sx={{ pt: "100px", pb: "250px" }}>
      <Card sx={{ mt: 5, width: "350px", borderRadius: "16px" }}>
        <Box
          sx={{ p: 2, display: "flex", flexDirection: "column" }}
          alignItems="center"
          justifyContent="center"
        >
          <CardMedia
            component="img"
            sx={{ width: 200, borderRadius: "50%" }}
            image={track.album.imageUrl}
            alt="Live from space album cover"
          />

          <Typography variant="h4" sx={{ mt: 2 }}>
            {track.name}
          </Typography>
          {track.artists.map((item) => (
            <Typography variant="h6">{item.name}</Typography>
          ))}

          <Box sx={{ mt: 3 }}>
            <audio controls="controls">
              <source src={track.previewUrl} type="audio/mpeg" />
            </audio>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default TrackDetail;
