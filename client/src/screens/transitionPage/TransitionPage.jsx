/* REACT */
import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

/* MUI */
import { Box, Typography, useTheme } from "@mui/material";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

/* COMPONENTS */
import { Header } from "../../components/Header";
import { MenuVariant } from "../../components/MenuVariant";

export const TransitionPage = () => {
  const location = useLocation();
  const surveyResult = location.state && location.state.surveyResult;

  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      /* LINK TO GENDER DETECTION MODEL */
      window.location.href = "http://127.0.0.1:5000";
      /* ONLY USE HISTORY WHEN REDIRECTING WITHIN APPLICATION */
      // history.push("http://127.0.0.1:5000"); // Replace "/target-page" with your desired redirection link
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#000", width: "auto", height: "auto" }}>
      <AppBar position="static" sx={{ backgroundColor: "#000" }}>
        <Header
          className="header-instance"
          menuProperty1="unselected-02"
          menuProperty11="mouse-over-05"
          override={<MenuVariant className="menu-variant7" text="About" />}
          hideMenuItems="false"
        />
      </AppBar>
      <div>
        <Container maxWidth="md" sx={{ marginTop: "2rem", backgroundColor: "#000" }}>
          <Box p={2}>
            <Typography variant="h2" sx={{ color: "#FFF", fontWeight: "bold" }}>
              Transition page
            </Typography>
            <Typography variant="p" sx={{ color: "#FFF" }}>
              Redirecting in {countdown} seconds...
            </Typography>
            {surveyResult && (
              <Typography variant="p" sx={{ color: "#FFF", fontWeight: "bold" }}>
                Survey Result:
                <pre>{JSON.stringify(surveyResult, null, 2)}</pre>
              </Typography>
            )}
          </Box>
        </Container>
      </div>
    </div>
  );
};
