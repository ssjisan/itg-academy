import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const MainBoxSx = {
    backgroundImage: "url('pattern.svg')",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  };
  const ContainerSx = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const SpanSx = {
    color: "#9C27B0",
  };
  return (
    <Box sx={MainBoxSx}>
      <Container sx={ContainerSx}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack gap="40px" sx={{ mt: "24px" }}>
              <Stack gap="0px">
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: "left",
                  }}
                  color="primary"
                >
                  বাংলায় নেটওয়ার্কিং এর বেসিক কোর্স
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    textAlign: "left",
                  }}
                  color="text.primary"
                >
                  শুরু থেকে
                  <Box component="span" sx={SpanSx}>
                    {" "}
                    নেটওয়ার্কিং
                  </Box>{" "}
                  শিখি
                </Typography>
              </Stack>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ textAlign: "left" }}
              >
                কোর্সটিতে আপনি নেটওয়ার্কিং-এর মূল বিষয়গুলো যেমন LAN, WAN, OSI
                মডেল, TCP/IP, IP অ্যাড্রেসিং, সাবনেটিং, রাউটার ও সুইচ
                কনফিগারেশন, DHCP, DNS, ফায়ারওয়াল, VPN, ওয়ারলেস নেটওয়ার্কিং ও
                নেটওয়ার্ক সিকিউরিটি সম্পর্কে গভীরভাবে শিখবেন।
              </Typography>
              <Stack flexDirection={"row"} gap="16px">
                <Link to="/registration">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ width: "140px" }}
                    size="large"
                  >
                    এনরোল করুন
                  </Button>
                </Link>
                <Link to="/courses/suru-theke-networking-shikhi">
                  <Button
                    color="primary"
                    variant="outlined"
                    sx={{ width: "140px" }}
                    size="large"
                  >
                    কোর্সের বিস্তারিত
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box
              sx={{ height: "380px", borderRadius: "12px", overflow: "hidden" }}
            >
              <img
                src="sweb.png"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
