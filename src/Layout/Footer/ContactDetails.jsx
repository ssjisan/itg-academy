import { Box, Typography } from "@mui/material";

export default function ContactDetails() {
    const ContainerSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "32px",
        flexShrink: "0"
    }
    const MailSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px"
    }
    return (
        <Box sx={ContainerSx}>
            <Box sx={MailSx}>
                <Typography variant="subtitle1" color="text.secondary">Say hello</Typography>
                <Typography variant="subtitle1" sx={{ color: "#fff" }}>hello@insighttechbd.com</Typography>
            </Box>
            <Typography sx={{ color: "#fff", maxWidth: "356px", width: "100%" }}>House-22, Road-6, Block-F, Banasree, Rampura, Dhaka-1219.</Typography>
        </Box>
    )
}
