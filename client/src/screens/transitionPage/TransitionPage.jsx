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

  const handleAnchorClick = () => {
    // using window.location.href because the model is in different repo.
    window.open(process.env.FLASK_APP_BACKEND_URL, '_blank');
    // navigate("/"); // Replace "/another-page" with your desired redirection link
  };

  const handleRedirectClick = () => {
    // using window.location.href to redirect the page
    navigate('/survey/final');
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
      <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Container maxWidth="md" sx={{ marginTop: "2rem", backgroundColor: "#000" }}>
          <Box p={2}>
            <Typography variant="h2" sx={{ color: "#FFF", fontWeight: "bold" }}>
              Thats' the first part! 
            </Typography>
            <Typography variant="p" sx={{ color: "#FFF" }}>
              The next leg of the study involves an interaction with a facial classification algorithm. 
              <br/>
              A new tab will open up soon, please return back to this page once you are finished!
              </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={handleRedirectClick}
            sx={{ marginTop: "1rem" , backgroundColor: "#E0FD2C", color:"#9c27b0"}}
          >
      Continue!
    </Button>
        </Container>
      </div>
      <footer style={{ backgroundColor: "#000", padding: "1rem", textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "#FFF" }}>
        Opening new tab in {countdown} seconds...
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
