"use client";
import { AppBar, Box, Container, Grid, Tab, Tabs, styled } from "@mui/material";
import { common } from "@mui/material/colors";
import { useState } from "react";
import { Logo } from "./Logo";

const CustomHeader = styled(AppBar)(({ theme }) => ({
  color: common.black,
  backgroundColor: "#121640",
  left: 0,
  boxShadow: "0 2px 4px 0 rgba(176,176,176,0.5)",
  zIndex: theme.zIndex.modal,
}));

const AntTabs = styled(Tabs)({
  padding: 10,
  borderRadius: 10,
  width: "100%",
  backgroud: "linear-gradient(60deg, #ab47bc, #8e24aa)",
  "& .MuiTabs-indicator": {
    backgroundColor: "rgba(255, 255, 255, .2)",
    height: "100%",
    borderRadius: 10,

    display: "block",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    fontSize: "20px",
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "#FFFFFF",

    "&:hover": {
      color: "#FF00E6",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#00C4CC",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

export const TopNavigation = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <CustomHeader>
      <Container maxWidth="xl" component="nav" sx={{ p: 1 }}>
        <Grid container direction="row" alignItems="flex-end">
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            <Box>
              <AntTabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <AntTab label="Favorites" {...a11yProps(0)} />
                <AntTab label="Item Two" {...a11yProps(1)} />
                <AntTab label="Item Three" {...a11yProps(2)} />
              </AntTabs>
              |
            </Box>
          </Grid>
        </Grid>
      </Container>
    </CustomHeader>
  );
};
