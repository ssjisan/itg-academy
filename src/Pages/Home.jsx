import { Box, useMediaQuery } from "@mui/material";
import Navbar from "../Layout/Navbar/Navbar";
import NavForMobile from "../Layout/Navbar/NavForMobile";
import HeroSection from "../Components/Home/HeroSection";

export default function Home() {
  const forBelow1100 = useMediaQuery("(max-width:1100px)");

  return (
    <Box>
      {forBelow1100 ? <NavForMobile /> : <Navbar />}
      <HeroSection />
    </Box>
  );
}
