import {
    Typography,
    List,
    ListItem,
    ListItemText,
    Box,
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Chip,
  } from "@mui/material";
  import Dummy from "../../../Assets/courseDetails.json";
  import { useState } from "react";
  import { DownArrow } from "../../../Assets/IconSet";
export default function LeasonDetails() {
    // Initializing the expanded state with an empty object
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccordionSx = {
    marginBottom: "8px",
    marginTop: "8px",
    borderRadius: "12px",
    border: "1px solid rgba(145, 142, 175, 0.40)",
    boxShadow: "none",
    position: "inherit",
    padding: "4px",
  };
  return (
    <Stack>
    <Stack gap="16px">
      <Typography variant="h4" gutterBottom>
      কোর্সের বিষয়বস্তু
      </Typography>
      {Dummy.map((week, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          square={"false"}
          sx={AccordionSx}
        >
          <AccordionSummary expandIcon={<DownArrow />}>
            <Stack
              flexDirection="row"
              sx={{ width: "100%", pr: "8px" }}
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">{week.title}</Typography>
              <Chip
                label={`week - ${index + 1}`}
                color="primary"
                variant="outlined"
              />
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            {week.sessions.map((session, sessionIndex) => (
              <Box key={sessionIndex} sx={{ p: "12px 24px 12px 24px" }}>
                <Typography variant="h6">{session.title}</Typography>
                <List sx={{ listStyleType: "disc" }}>
                  {session.topics.map((topic, topicIndex) => (
                    <ListItem key={topicIndex} sx={{ display: "list-item" }}>
                      <ListItemText primary={topic} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
    <Stack sx={{ mt: "32px" }}>
      <Typography variant="h4" gutterBottom>
        ক্লাস শিডিউল
      </Typography>
      <Stack
        sx={{ p: "40px 20px", background: "#fcecff", borderRadius:"12px" }}
        flexDirection="row"
        justifyContent="space-evenly"
      >
        <Stack
          flexDirection="row"
          gap="8px"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%"}}
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
          justifyContent="center"
          sx={{ width: "100%"}}
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
    </Stack>
    <Stack sx={{ mt: "32px", mb:"64px" }}>
      <Typography variant="h4" gutterBottom>
        যা যা শিখবেন
      </Typography>
      <Stack gap="16px">
        <Typography>✔️ মৌলিক নেটওয়ার্কিং ধারণা এবং প্রোটোকল</Typography>
        <Typography>✔️ ছোট নেটওয়ার্ক কনফিগার ও সমস্যা সমাধান</Typography>
        <Typography>
          ✔️ বাস্তব অভিজ্ঞতা অর্জন Wireshark, Packet Tracer-এর মাধ্যমে
        </Typography>
        <Typography>
          ✔️ CCNA, CompTIA Network+, MTCNA, MTCRE-এর মতো সার্টিফিকেশন পরীক্ষার
          প্রস্তুতি
        </Typography>
      </Stack>
    </Stack>
  </Stack>
  )
}
