/* REACT */ 
import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; 

/* MUI */
import { Box, Typography, useTheme } from "@mui/material";
import { AppBar, Button, Typography, Container } from "@mui/material";

/* COMPONENTS */
import { Header } from "../../components/Header";
import { MenuVariant } from "../../components/MenuVariant";

export const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  // Uncomment this when in developer mode.
  // const surveyResult = location.state && location.state.surveyResult;

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
            Thats' it! 
          </Typography>
          <Typography variant="p" sx={{ color: "#FFF" }}>
            Thank you for participating in this study.
          {/* ONLY USING THIS DURING DEVELOPMENT */}
          {/* {/* {surveyResult && (
            <Typography variant="p" sx={{ color: "#FFF", fontWeight: "bold" }}>
              Survey Result:
              <pre>{JSON.stringify(surveyResult, null, 2)}</pre> */}
            </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
            <Button onClick={() => { navigate('/'); }} variant="contained" color="primary" sx={{ marginRight: "1rem" }}>
              Back to Start
            </Button>
            {/* REMOVING ANALYTICS BUTTON */}
            {/* <Button onClick={() => { navigate('/analysis'); }} variant="contained" color="secondary">
              Analytics
            </Button> */}
          </Box>
      </Container>
    </div>
    </div>
    );
};
