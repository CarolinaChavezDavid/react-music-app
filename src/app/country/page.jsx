"use client";
import {
  Box,
  Container,
  Grid,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countriesListId } from "../api/CountriesListId";
import { TrackCard } from "../dashboard/components/TrackCard";
import { updateCountryTracksList } from "../state/services/thunks";

export default function Page() {
  const countryParameters = countriesListId;
  const dispatch = useDispatch();

  const { countryTracks } = useSelector((state) => state.countryTracks);

  console.log("initialTracks", countryTracks);

  const [country, setCountry] = useState(countriesListId[0]);
  const [query, setQuery] = useState("");

  const updateCountryInfo = (countryInfo) => {
    setCountry(countryInfo);
    dispatch(updateCountryTracksList(country.playListID));
  };
  const title = `${country.countryImage} Top 50 ${country.countryName}`;

  return (
    <Container maxWidth="xl" sx={{ pt: "100px", pb: "250px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          mt: "2rem",
        }}
      >
        <img
          style={{ width: 50, height: 50, mx: "1rem" }}
          src="./images/lupa.png"
          alt="logo"
        />
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            width: 500,
            mx: "1rem",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search your song"
            onChange={(e) => setQuery(e.target.value)}
          />
        </Paper>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mt: "2rem",
          justifyContent: "center",
        }}
      >
        {countryParameters.map((item) => (
          <Paper
            key={item.country}
            elevation={0}
            onClick={() => updateCountryInfo(item)}
            style={{ backgroundColor: "transparent" }}
          >
            <Typography variant="h1" sx={{ mx: "1rem", cursor: "pointer" }}>
              {item.countryImage}
            </Typography>
          </Paper>
        ))}
      </Box>
      {countryTracks.length > 1 && (
        <Typography variant="h2" sx={{ mb: 3 }} style={{ fontWeight: "bold" }}>
          {title}
        </Typography>
      )}

      <Grid container sx={{ mt: 10 }}>
        {countryTracks.length > 1 &&
          countryTracks
            .filter((track) => track.name.toLowerCase().includes(query))
            .map((item) => (
              <Grid
                item
                key={item.id}
                display="flex"
                sm={6}
                md={3}
                sx={{ mb: "2rem" }}
              >
                <TrackCard track={item} />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
}
