/* REACT */
import React, { useEffect, useState } from "react";
import { useLocation, useHistory, useNavigate } from "react-router-dom";

/* MUI */
import { Box, Typography, useTheme } from "@mui/material";
import { Radio, Button, AppBar, Toolbar, Typography, Container } from "@mui/material";

/* COMPONENTS */
import { Header } from "../../components/Header";
import { MenuVariant } from "../../components/MenuVariant";

/* CUSTOM STYLING OPTIONS */
import { styled } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CancelIcon from "@mui/icons-material/Cancel";

const GreenRadio = styled(Radio)`
  &.Mui-checked {
    color: #9c27b0; /* Purple color */
  }

  .MuiSvgIcon-root {
    color: #7CFC00; /* Green color */
  }
`;

const RedRadio = styled(Radio)`
  &.Mui-checked {
    color: #f44336; /* Red color */
  }

  .MuiSvgIcon-root {
    color: #f44336; /* White color */
  }
`;

export const ConsentFormPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === "option1") {
      navigate("accept"); // Accept the consent form
    } else if (selectedOption === "option2") {
      navigate("decline"); // Decline the consent form
    }
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
      {/* MAIN CONNTENT BEGINS */}
      <div>
        <Container maxWidth="md" sx={{ marginTop: "2rem", backgroundColor: "#000" }}>
          <Box p={2} textAlign="center">
            <Typography variant="h2" sx={{ color: "#FFF", fontWeight: "bold" }}>
              Consent Form
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "#FFF", fontSize: "1.2rem" }}>
              Welcome to our research study!
            </Typography>
            <Typography variant="body1" sx={{ color: "#FFF", marginTop: "1rem" }}>
            We are interested in understanding how machine-classified and self-perceived gender identity are conveyed in Facial Recognition Technologies. 
            You will be presented with information relevant to this issue. Then, you will be asked to answer some questions about it. Your responses will be kept completely confidential.
            <br/><br/>
            The study will take you around ~10 mins to complete. Your participation in this research is voluntary, and you have the right to withdraw at any point during the process.
            <br/><br/>
            By clicking the button below, you acknowledge the previous information: 
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
              <GreenRadio
                color="default"
                checkedIcon={<CheckCircleIcon />}
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
              />
              <Typography variant="body1" sx={{ color: "#FFF" }}>
              I consent, begin the study.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}>
              <RedRadio
                color="default"
                checkedIcon={<CancelIcon />}
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
              <Typography variant="body1" sx={{ color: "#FFF" }}>
              I do not consent, I do not want to participate.
              </Typography>
            </Box>
            <Button variant="contained" sx={{ marginTop: "1rem" }} onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Container>
      </div>
    </div>
  );
};
