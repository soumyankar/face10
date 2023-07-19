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

  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      /* LINK TO GENDER DETECTION MODEL */
      window.location.href = process.env.FLASK_APP_BACKEND_URL;
      /* ONLY USE HISTORY WHEN REDIRECTING WITHIN APPLICATION */
      // history.push("http://127.0.0.1:5000"); // Replace "/target-page" with your desired redirection link
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleAnchorClick = () => {
    // using window.location.href because the model is in different repo.
    window.location.href = process.env.FLASK_APP_BACKEND_URL;
    // navigate("/"); // Replace "/another-page" with your desired redirection link
  };
  return (
    <div style={{ backgroundColor: "#000", width: "100%", height: "100%" }}>
      <AppBar position="static" sx={{ backgroundColor: "#000" }}>
        <Header
          className="header-instance"
          menuProperty1="unselected-02"
          menuProperty11="mouse-over-05"
          override={<MenuVariant className="menu-variant7" text="About" />}
          hideMenuItems="false"
        />
      </AppBar>
      <div style={{ flex: 1 }}>
        <Container maxWidth="md" sx={{ marginTop: "2rem", backgroundColor: "#000" }}>
          <Box p={2}>
            <Typography variant="h2" sx={{ color: "#FFF", fontWeight: "bold" }}>
              Thats' the first part! 
            </Typography>
            <Typography variant="p" sx={{ color: "#FFF" }}>
              The next leg of the study involves an interaction with a facial classification algorithm. Hold on tight!
            {/* ONLY USING THIS DURING DEVELOPMENT */}
            {/* {/* {surveyResult && (
              <Typography variant="p" sx={{ color: "#FFF", fontWeight: "bold" }}>
                Survey Result:
                <pre>{JSON.stringify(surveyResult, null, 2)}</pre> */}
              </Typography>
          </Box>
        </Container>
      </div>
      <footer style={{ backgroundColor: "#000", padding: "1rem", textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "#FFF" }}>
        Redirecting in {countdown} seconds...
        <a
            href="#"
            onClick={handleAnchorClick}
            style={{ color: "#FFF", textDecoration: "none", borderBottom: "1px solid #9c27b0" }}
          >
        ...or click here to redirect directly.
          </a>
        </Typography>
      </footer>
    </div>
  );
};
