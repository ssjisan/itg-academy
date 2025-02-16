import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export default function RequestProject() {
    const ContainerSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
        flexShrink: "0"
    }
    const linkStyle = {
        textDecoration: "none",
    };
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <Box sx={ContainerSx}>
            <Typography variant="subtitle1" color="text.secondary">Request a Quote</Typography>
            <Link to="/contact_us" style={linkStyle}>
                <Typography variant="subtitle1" sx={{ color: "#fff" }} onClick={goToTop}>Got a project? <br /> <Box component="span" sx={{ textDecoration: "underline" }}>Let&lsquo;s talk</Box> </Typography>
            </Link>
        </Box>
    )
}
