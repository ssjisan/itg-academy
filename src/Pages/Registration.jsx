import { Box, Stack, Typography } from "@mui/material";
import Form from "../Components/Registration/Form";
import { LeftArrow } from "../Assets/IconSet";
import { Link } from "react-router-dom";

export default function Registration() {
  const NavSx = {
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(145, 142, 175, 0.24)",
    background: "rgba(255, 255, 255, 0.48)",
    backdropFilter: "blur(16px)",
    position: "fixed",
    width: "100%",
    zIndex: 1000,
  };
  // Configure Style End
  return (
    <div>
      <Box sx={NavSx}>
        <Link to="/">
        <Stack flexDirection="row" gap="8px" alignItems="center">
          <LeftArrow />
          <Typography> হোমে ফিরে যান</Typography>
        </Stack>
        </Link>
      </Box>
      <Form />
    </div>
  );
}
