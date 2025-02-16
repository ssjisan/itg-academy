import { useState, useEffect } from "react";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

export default function DetailsPartRight() {
  const facility = [
    "৭০+ লাইভ ক্লাস",
    "২৪+ কনসেপচুয়াল ক্লাস",
    "প্রিরেকর্ডেড ভিডিও",
    "৫টি ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্টস",
    "মক ইন্টারভিউ",
    "লাইফটাইম অ্যাকসেস",
  ];

  const [isSticky, setIsSticky] = useState(false);
  const isMobile = useMediaQuery("(max-width: 899px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 520) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!isMobile ? (
        <Stack
          sx={{
            p: "16px",
            borderRadius: "12px",
            boxShadow:
              "0 2px 4px rgba(6, 17, 118, 0.08), 0 4px 12px rgba(6, 17, 118, 0.08)",
            background: "#fcecff",
            position: isSticky ? "fixed" : "static",
            top: isSticky ? "120px" : "auto",
            transition: "all 0.4s ease-in-out",
            transform: isSticky ? "translateY(0)" : "translateY(-20px)",
            width: isSticky ? "auto" : "100%",
          }}
          gap="24px"
        >
          {!isSticky && (
            <Typography variant="h4" gutterBottom>
              কী কী থাকছে এই ক্যারিয়ার পাথে
            </Typography>
          )}
          {!isSticky && (
            <Stack>
              {facility.map((topic, topicIndex) => (
                <Stack
                  key={topicIndex}
                  flexDirection="row"
                  gap="12px"
                  alignItems="center"
                  sx={{ mb: "16px" }}
                >
                  <Stack
                    sx={{
                      border: "1px solid #641473",
                      width: "24px",
                      height: "24px",
                      borderRadius: "20px",
                    }}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography>{topicIndex + 1}</Typography>
                  </Stack>
                  <Typography sx={{ fontSize: "16px !important" }}>
                    {topic}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          )}
          <Stack flexDirection="row" gap="16px" alignItems="center">
            <Typography variant="h2" color="primary">
              ৳ 7000.00
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              ৳ 10000.00
            </Typography>
            <Box
              sx={{ background: "#F0C231", p: "4px 8px", borderRadius: "6px" }}
            >
              <Typography variant="body1">35% off</Typography>
            </Box>
          </Stack>
          <Link to="/registration">
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "100%" }}
              size="large"
            >
              এনরোল করুন
            </Button>
          </Link>
        </Stack>
      ) : (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            background: "#FFF",
            boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Stack flexDirection="row" gap="16px" alignItems="center" justifyContent="center" sx={{mb:"16px"}}>
            <Typography variant="h2" color="primary">
              ৳ 7000.00
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              ৳ 10000.00
            </Typography>
            <Box
              sx={{ background: "#F0C231", p: "4px 8px", borderRadius: "6px" }}
            >
              <Typography variant="body1">35% off</Typography>
            </Box>
          </Stack>
          <Link to="/registration">
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "100%" }}
              size="large"
            >
              এনরোল করুন
            </Button>
          </Link>
        </Box>
      )}
    </>
  );
}
