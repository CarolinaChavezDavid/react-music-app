import { Container, Typography } from "@mui/material";
import { TrackComponent } from "./components/TrackComponent";

export default function Page() {
  return (
    <Container maxWidth="xl" sx={{ pt: "100px", pb: "250px", mt: 4 }}>
      <Typography sx={{ mb: 2 }} variant="h4">
        Favorite tracks
      </Typography>
      <TrackComponent />
    </Container>
  );
}
