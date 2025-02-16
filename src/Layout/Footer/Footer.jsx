import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import ContactDetails from "./ContactDetails";
import OtherLinks from "./OtherLinks";
import RequestProject from "./RequestProject";
import SocialLinks from "./SocialLinks";

export default function Footer() {
    const forBelow599 = useMediaQuery("(max-width:599px)");

    const FooterContainerSx = {
        display: "flex",
        paddingTop: "40px",
        paddingBottom: "24px",
        flexDirection: "column",
        alignItems: "flex-start",
        background: "#242424"
    }
    const BottomSx = {
        display: "flex",
        paddingTop: "40px",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: forBelow599 && "column",
        gap:"24px",
        borderTop: "1px solid #918EAF"
    }
    return (
        <Box sx={FooterContainerSx}>
            <Container>
                <Box sx={{ pb: "80px" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} lg={8}>
                            <ContactDetails />
                        </Grid>
                        <Grid item xs={6} sm={6} lg={2}>
                            <OtherLinks />
                        </Grid>
                        <Grid item xs={6} sm={6} lg={2}>
                            <RequestProject />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={BottomSx}>
                    <Typography variant="subtitle1" sx={{ color: "#fff" }}>2024 © Insighttech</Typography>
                    <SocialLinks />
                </Box>
            </Container>
        </Box>
    )
}
