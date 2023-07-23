"use client";
import { createTheme } from "@mui/material";
import { common } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4C0BD1",
      light: "#7900FF",
    },
    secondary: {
      main: "#FF00E6",
      light: "#EE3EC9",
    },
    text: {
      primary: common.black,
    },
  },
  spacing: 2,
  typography: {
    fontFamily: ["Gugi-Regular", "sans-serif"].join(","),
    h1: {
      fontFamily: "Gugi-Regular",
      fontSize: 25,
      lineHeight: 1.375,
    },
    h2: {
      fontFamily: "Gugi-Regular",
      fontSize: 24,
      lineHeight: 1.45,
    },
    h3: {
      fontFamily: "Gugi-Regular",
      fontSize: 20,
      lineHeight: 1.75,
    },
  },
});

export default theme;
