"use client";
import { AppBar, Container, Grid, Typography, styled } from "@mui/material";
import { common } from "@mui/material/colors";
import { useRouter } from "next/navigation";
import { CustomLink } from "./CustomLink";
import { Logo } from "./Logo";

const Link = styled(CustomLink)(({ theme }) => ({
  color: common.white,
  textTransform: "none",
  borderRadius: 0,
  marginTop: "40px",
  width: "100px",
  padding: 0,
  "&:after": {
    backgroundColor: common.white,
    content: '""',
    height: "3px",
    marginLeft: "auto",
    marginRight: "auto",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "-8px",
    width: "100%",
  },
}));

const CustomHeader = styled(AppBar)(({ theme }) => ({
  color: common.black,
  backgroundColor: "#121640",
  left: 0,
  boxShadow: "0 2px 4px 0 rgba(176,176,176,0.5)",
  zIndex: theme.zIndex.modal,
}));

export const TopNavigation = () => {
  const router = useRouter();

  const links = [
    {
      text: "Music",
      href: "/",
    },
    {
      text: "Favorites",
      href: "favorites",
    },
  ];

  return (
    <CustomHeader>
      <Container maxWidth="xl" component="nav" sx={{ p: 1 }}>
        <Grid container direction="row" alignItems="center" spacing={6}>
          <Grid item>
            <Logo />
          </Grid>
          <Grid item alignItems="center" justifyContent="center">
            {links.map((item) => {
              return (
                <Link
                  href={item.href}
                  key={item.text}
                  variant="text"
                  sx={{
                    "&:after": {
                      display: router.pathname === item.href ? "block" : "none",
                    },
                  }}
                >
                  <Typography variant="h2">{item.text}</Typography>
                </Link>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </CustomHeader>
  );
};
