/* REACT */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* MUI */
import { Box, Typography } from "@mui/material";
import { AppBar, Typography, Container } from "@mui/material";

/* COMPONENTS */
import { Header } from "../../components/Header";
import { MenuVariant } from "../../components/MenuVariant";

export const NotFound = () => {
  const [countdown, setCountdown] = useState(8);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      navigate("/"); // Replace "/target-page" with your desired redirection link
    }, 8000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleAnchorClick = () => {
    navigate("/"); // Replace "/another-page" with your desired redirection link
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
            <Typography variant="h3" sx={{ color: "#FFF", fontWeight: "bold" }}>
              Whoops!
            </Typography>
            <Typography variant="p" sx={{ color: "#FFF" }}>
              We do not seem to have a webpage like that. Guiding you back to the homepage in {countdown} seconds..
            </Typography>
            <br/><br/>
          </Box>
        </Container>
      </div>
      <footer style={{ backgroundColor: "#000", padding: "1rem", textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "#FFF" }}>
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
