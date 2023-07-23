import { Container, Grid, Typography } from "@mui/material";

export const FavoriteListHeader = () => {
  return (
    <Container maxWidth="xl" sx={{ display: "flex", p: 1 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Typography variant="h6">Track</Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography variant="h6">Album</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">Date added</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">Duration</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
