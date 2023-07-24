import { Box, Card, CardMedia, Typography } from "@mui/material";

export const PlayCard = ({ track }) => {
  return (
    <Card sx={{ width: "400px", borderRadius: "16px" }}>
      <Box
        sx={{ p: 5, display: "flex", flexDirection: "column" }}
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
          <Typography key={item.id} variant="h6">
            {item.name}
          </Typography>
        ))}

        <Box sx={{ mt: 3 }}>
          {track.previewUrl && (
            <audio controls="controls">
              <source src={track.previewUrl} type="audio/mpeg" />
            </audio>
          )}
        </Box>
      </Box>
    </Card>
  );
};
