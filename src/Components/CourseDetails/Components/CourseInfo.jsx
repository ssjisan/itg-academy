import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import LeasonDetails from "./LeasonDetails";
export default function CourseInfo() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab
              label="কোর্সের বিষয়বস্তু"
              {...a11yProps(0)}
              sx={{ fontSize: "18px !important" }}
            />
            <Tab
              label="ক্লাস শিডিউল"
              {...a11yProps(1)}
              sx={{ fontSize: "18px !important" }}
            />
            <Tab
              label="যা যা শিখবেন"
              {...a11yProps(2)}
              sx={{ fontSize: "18px !important" }}
            />
            <Tab
              label="যাদের জন্য"
              {...a11yProps(3)}
              sx={{ fontSize: "18px !important" }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Stack
            sx={{ p: "40px 20px", background: "#fcecff" }}
            flexDirection="row"
            justifyContent="space-evenly"
          >
            <Stack
              flexDirection="row"
              gap="8px"
              alignItems="center"
              sx={{ width: "100%" }}
            >
              <Box
                sx={{
                  height: "12px",
                  width: "12px",
                  borderRadius: "2px",
                  background: "#8B209D",
                }}
              ></Box>
              <Typography>Monday 9:00 PM</Typography>
            </Stack>
            <Stack
              flexDirection="row"
              gap="8px"
              alignItems="center"
              sx={{ width: "100%" }}
            >
              <Box
                sx={{
                  height: "12px",
                  width: "12px",
                  borderRadius: "2px",
                  background: "#8B209D",
                }}
              ></Box>
              <Typography>Wednesday 9:00 PM</Typography>
            </Stack>
          </Stack>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Stack gap="16px">
            <Typography>✔️ মৌলিক নেটওয়ার্কিং ধারণা এবং প্রোটোকল</Typography>
            <Typography>✔️ ছোট নেটওয়ার্ক কনফিগার ও সমস্যা সমাধান</Typography>
            <Typography>
              ✔️ বাস্তব অভিজ্ঞতা অর্জন Wireshark, Packet Tracer-এর মাধ্যমে
            </Typography>
            <Typography>
              ✔️ CCNA, CompTIA Network+, MTCNA, MTCRE-এর মতো সার্টিফিকেশন
              পরীক্ষার প্রস্তুতি
            </Typography>
          </Stack>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Item four
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
