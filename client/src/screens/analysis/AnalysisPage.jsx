/* REACT */
import React from "react";
import { useState } from "react";

/* MUI */
import { AppBar, Typography, Grid, Container, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";

/* COMPONENTS */
import { Header } from "../../components/Header";
import { MenuVariant } from "../../components/MenuVariant";

/* PRO-SIDEBAR */
import { ProSidebarProvider } from 'react-pro-sidebar';
import MySidebar from "../../components/sidebar/Sidebar"

/* TOP NAVBAR */
import { Header } from "../../components/Header";
import { MenuVariant } from "../../components/MenuVariant";
/* STYLING, TOKENS */
import { tokens } from "../../../theme";
import { ColorModeContext, useMode } from "../../../theme";

export const AnalysisPage = () => {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
 /* SIDEBAR */
 const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Grid container>
            {/* Left Section */}
            <Grid item xs={2} sx={{ width: "100%" }}>
              <ProSidebarProvider>
                <MySidebar isVisible={true}/>
              </ProSidebarProvider>
            </Grid>

            {/* Right Section */}
            <Grid item xs={10}>
              <Grid container direction="column">
                {/* Appbar */}
                <Grid item>
                  <AppBar position="static" sx={{ backgroundColor: "#000" }} setIsSidebarVisible={setIsSidebarVisible}>
                  <Header hideMenuItems="false"/>
                  </AppBar>
                </Grid>

                {/* Content */}
                <Grid item sx={{ p: 2 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      color: "#FFF",
                      fontWeight: "bold",
                    }}
                  >
                    Hello, this is the Analysis page!
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      color: "#FFF",
                      fontWeight: "bold",
                    }}
                  >
                    Hello, this is the subtitle to the analysis page title! Try clicking on the links on the sidebar to redirect to specific analytics.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

