import { Container, Grid, Typography } from "@mui/material";

export const FavoriteListHeader = () => {
  return (
    <Container maxWidth="xl" sx={{ display: "flex" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
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
        <Grid item xs={1}></Grid>
      </Grid>
    </Container>
  );
};
