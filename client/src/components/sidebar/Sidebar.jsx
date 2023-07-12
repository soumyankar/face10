// React libraries
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// MUI and ProSidebar
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Box, IconButton, Grid, Typography, useTheme } from "@mui/material";

// Theme settings
import { tokens } from "../../../theme";

// Bunch of icons required to make the sidebar look better.
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // Need location to set highlight colour on current page
  // Determine if the current item is active based on the URL path
  const location = useLocation();
  const isActive = location.pathname === to;
  
  // Apply a different style to the active item
  const itemStyle = isActive
  ? {
    color: colors.greenAccent[600],
    background: colors.primary[100],
    // background: "#000"
  }
  : {
    color: colors.primary[100],
  };

  return (
    <MenuItem
    component={<Link to={to} />}
    active={selected === title}
    style={{ itemStyle }}
    onClick={() => setSelected(title)}
    icon={icon}
    >
    <Typography>{title}</Typography>
    </MenuItem>
    );
  };
  
  // the isVisible prop is sent from App.js that decides whether the sidebar is to be shown or not.
  const MySidebar = ({ isVisible }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const { isCollapsed, collapseSidebar } = useProSidebar();
    // const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Analysis");
    
    // This will disable the sidebar fromm view.
    if (!isVisible) {
      return null; // Render nothing if isVisible is false
    }
    return (
      <Grid container sx={{ height: "100vh", width:"auto" }}>
      {/* SIDEBAR BEGINS */}
      <Sidebar backgroundColor="rgb(0, 0, 0)" sx={{ height: "100%" }}>
      <Menu iconShape="square">
      {/* LOGO AND MENU ICON */}
      <MenuItem
      style={{
        margin: "10px 0 20px 0",
        color: colors.primary[100],
      }}
      >
      <IconButton onClick={() => collapseSidebar()}>
      {isCollapsed ? <MenuOutlinedIcon /> : undefined}
      </IconButton>
      {!isCollapsed && (
        <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        ml="15px"
        >
        <IconButton onClick={() => collapseSidebar()}>
        <MenuOutlinedIcon />
        </IconButton>
        </Box>
        )}
        </MenuItem>
        
        {/* MENU ITEMS */}
        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
        {/* ANALYSIS HOME BUTTON */}
        <Item
        title="Analysis"
        to="/analysis"
        icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        />
        
        {/* DEMOGRAPHICS SECTION */}
        <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px" }}
        >
        Demographics
        </Typography>
        
        <Item
        title="Age"
        to="/analysis/age"
        icon={<PeopleOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        />
        <Item
        title="Gender"
        to="/analysis/gender"
        icon={<ContactsOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        />
        
        {/* TECHNICAL SECTION */}
        <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px" }}
        >
        Technical Section
        </Typography>
        
        <Item
        title="Awareness Levels"
        to="/"
        icon={<PersonOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        />
        
        {/* CORRELATIONAL STATISTICS */}
        <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px" }}
        >
        Correlational Statistics
        </Typography>
        <Item
        title="Stats 1"
        to="/"
        icon={<BarChartOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        />
        <Item
        title="Stats 2"
        to="/"
        icon={<PieChartOutlineOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        />
        <Item
        title="Stats 3"
        to="/"
        icon={<TimelineOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        />
        
        </Box>
        </Menu>
        </Sidebar>
        {/* SIDEBAR ENDS */}
        </Grid>
        );
      };
      
      export default MySidebar;