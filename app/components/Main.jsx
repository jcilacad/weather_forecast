"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";

import CityDetails from "./CityDetails";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import SearchWeather from "./SearchWeather";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://weather-forecast-three-xi.vercel.app/"
      >
        Weather Forecast
      </Link>{" "}
      2023
      {"."}
    </Typography>
  );
}

function isObjEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const theme = createTheme();

export default function Album() {
  const [cityData, setCityData] = useState({});

  const resultData = (result) => {
    if (result.cod !== "200") return;

    setCityData(result);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Weather Forecast
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
              marginBottom={"3rem"}
            >
              Access 5-day, 3-hour weather forecast data conveniently through
              search bar feature. Simply input your desired location and receive
              precise, up-to-date predictions to plan your activities. Stay
              informed and prepared with our user-friendly weather forecasting
              system.
            </Typography>
            <SearchWeather getCityData={resultData} />

            {!isObjEmpty(cityData) && <CityDetails cityData={cityData} />}
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
