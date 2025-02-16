import { Container, Grid } from "@mui/material";
import DetailsPartLeft from "../Components/CourseDetails/DetailsPartLeft";
import DetailsPartRight from "../Components/CourseDetails/DetailsPartRight";
import Navbar from "../Layout/Navbar/Navbar";

export default function CourseDetails() {
  return (
    <>
      <Navbar />
      <Container sx={{ pt: "120px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <DetailsPartLeft />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <DetailsPartRight />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
