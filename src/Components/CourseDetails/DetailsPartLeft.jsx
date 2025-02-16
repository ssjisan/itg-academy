import { Box, Stack, Typography } from "@mui/material";
import LessonDetails from "./Components/LeasonDetails";

export default function DetailsPartLeft() {
  return (
    <Stack gap="32px">
      <Box sx={{ height: "380px", borderRadius: "12px", overflow: "hidden" }}>
        <img
          src="/sweb.png"
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Typography variant="h2">
        শুরু থেকে নেটওয়ার্কিং শিখি - ব্যাচ ০১
      </Typography>
      <Stack
        sx={{
          width: "100%",
          p: "20px",
          borderRadius: "12px",
          background:
            "radial-gradient(91.65% 510.76% at 43.52% 47.91%, #9021A3 0%, #44094F 100%)",
        }}
        justifyContent="space-evenly"
        flexDirection="row"
      >
        <Stack alignItems="center" sx={{ color: "#FFF", width: "100%" }}>
          <Typography variant="h3">৫</Typography>
          <Typography variant="h5">মোট শিক্ষার্থী</Typography>
        </Stack>
        <Stack alignItems="center" sx={{ color: "#FFF", width: "100%" }}>
          <Typography variant="h3">৮</Typography>
          <Typography variant="h5">সপ্তাহ</Typography>
        </Stack>
        <Stack alignItems="center" sx={{ color: "#FFF", width: "100%" }}>
          <Typography variant="h3"> ১৬ </Typography>
          <Typography variant="h5">মোট ক্লাস</Typography>
        </Stack>
      </Stack>
      <LessonDetails />
    </Stack>
  ); 
}
