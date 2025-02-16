import { Box, Button, IconButton, useMediaQuery } from "@mui/material";
import { Logo } from "../../Assets/Logo";
import { Menu } from "../../Assets/IconSet";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import MenuDrawer from "./MenuDrawer";
import { Link } from "react-router-dom";

export default function NavForMobile() {
  const { toggleDrawer, open } = useContext(DataContext);
  const forBelow374 = useMediaQuery("(max-width:374px)");
  const forBelow676 = useMediaQuery("(max-width:676px)");

  // Configure Style Start
  const navSx = {
    padding: "12px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.48)",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid rgba(145, 142, 175, 0.24)",
    position: "fixed",
    width: "100%",
    zIndex: 1000,
  };
  const logoSx = {
    width: forBelow676 ? "120px" : "168px",
  };
  const menuButtonSx = {
    borderRadius: "8px",
    background: "rgba(145, 142, 175, 0.16)",
    p: "4px",
    width:  "40px",
    height:  "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  // Configure Style Start

  return (
    <>
      <Box sx={navSx}>
        <Link to="/">
          <Box sx={logoSx}>
            <Logo />
          </Box>
        </Link>
        <Box sx={{display:"flex", gap:"8px", justifyContent:"center", alignItems:"center"}}>
          <Link to="/schedule">
            <Button variant={forBelow374 ? "outlined" :"contained"} color="primary" size="medium">
              Schedule
            </Button>
          </Link>
          <IconButton sx={menuButtonSx} onClick={toggleDrawer}>
            <Menu />
          </IconButton>
        </Box>
      </Box>
      <MenuDrawer open={open} />
    </>
  );
}
