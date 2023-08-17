/* REACT */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* MUI */
import { Box, Typography, Button } from "@mui/material";
import { AppBar, Typography, Container } from "@mui/material";

/* COMPONENTS */
import { Header } from "../../components/Header";
import { MenuVariant } from "../../components/MenuVariant";

export const TransitionPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      /* LINK TO GENDER DETECTION MODEL */
      window.open(process.env.FLASK_APP_BACKEND_URL, '_blank');
      /* ONLY USE HISTORY WHEN REDIRECTING WITHIN APPLICATION */
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const openSurveyFinal = () => {
    navigate('/survey/final');
  };

  const openInteractiveModel = () => {
    window.open(process.env.FLASK_APP_BACKEND_URL, '_blank');
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
              The next leg of the study involves an interaction with a facial classification algorithm. 
              <br/>
              Please click on the button below to open up the interactive model. Follow the instructions there and return to this page once you are done!
              </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={openInteractiveModel}
            sx={{ marginTop: "1rem" , backgroundColor: "#E0FD2C", color:"#9c27b0", alignSelf:"center" }}
          >
            Open Interactive Gender Classification Model
          </Button>
        </Container>
      </div>
      <footer style={{ backgroundColor: "#000", padding: "1rem", textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "#FFF" }}>
        Once done,
        <a
            href="#"
            onClick={openSurveyFinal}
            style={{ color: "#FFF", textDecoration: "none", borderBottom: "1px solid #9c27b0" }}
          >
         click here to move on to the final part of the survey.
          </a>
        </Typography>
      </footer>
    </div>
  );
};
