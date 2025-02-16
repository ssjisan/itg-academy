import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom";

export default function OtherLinks() {
    const ContainerSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
        flexShrink: "0"
    }
    const LinkSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "12px"
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
        <Box sx={ContainerSx} >
            <Typography variant="subtitle1" color="text.secondary">Company</Typography>
            <Box sx={LinkSx} onClick={goToTop}>
                <Link to="/" style={linkStyle}>
                    <Typography variant="subtitle1" sx={{ color: "#fff" }}>Home</Typography>
                </Link>
                <Link to="/about_us" style={linkStyle}>
                    <Typography variant="subtitle1" sx={{ color: "#fff" }}>About Us</Typography>
                </Link>
                <Link to="/blog" style={linkStyle}>
                    <Typography variant="subtitle1" sx={{ color: "#fff" }}>Blog</Typography>
                </Link>
                <Link to="/contact_us" style={linkStyle}>
                    <Typography variant="subtitle1" sx={{ color: "#fff" }}>Contact Us</Typography>
                </Link>
            </Box>
        </Box>
    )
}

