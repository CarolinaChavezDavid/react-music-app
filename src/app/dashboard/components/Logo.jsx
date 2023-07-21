import { Grid, Typography } from "@mui/material";
import { common } from "@mui/material/colors";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <Grid container direction="row" alignItems="center" spacing={2}>
        <Grid item>
          <img
            style={{ width: 180, height: 100 }}
            src="./images/appLogo.png"
            alt="logo"
          />
        </Grid>

        <Grid item>
          <Typography variant="h4" color={common.white}>
            MusicApp
          </Typography>
        </Grid>
      </Grid>
    </Link>
  );
};