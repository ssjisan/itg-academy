import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { EyeOff, EyeOn } from "../../Assets/IconSet";
import { Link } from "react-router-dom";
import { Logo } from "../../Assets/Logo";

export default function Form() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Stack
        sx={{
          pt: "120px",
          width: "480px",
          maxWidth: "100%",
          pb:"48px"
        }}
        alignItems="center"
        gap="48px"
      >
        <Logo width="180px" height="52px" />
        <Stack justifyContent="center" sx={{ textAlign: "center" }}>
          <Typography variant="h3">একাউন্ট খুলুন</Typography>
          <Typography color="text.secondary">
            একাউন্ট খোলার জন্য সঠিক তথ্য প্রদান করুন। এই তথ্য গুলো পরবর্তীতে
            লগইন এর সময় প্রয়োজন হবে।
          </Typography>
        </Stack>
        <Stack sx={{ width: "100%" }} gap="24px">
          <Stack gap="8px">
            <Typography>আপনার পুরো নাম *</Typography>
            <TextField variant="outlined" size="small" />
          </Stack>
          <Stack gap="8px">
            <Typography>আপনার ইমেইল এড্রেস *</Typography>
            <TextField variant="outlined" size="small" />
          </Stack>
          <Stack gap="8px">
            <Typography>পাসওয়ার্ড দিন *</Typography>
            <Stack gap="8px">
              <FormControl
                sx={{ width: "100%" }}
                variant="outlined"
                size="small"
              >
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <EyeOff color="#918EAF" size="20px" />
                        ) : (
                          <EyeOn color="#918EAF" size="20px" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Typography
                sx={{
                  fontSize: "13px !important",
                }}
                color="text.secondary"
              >
                পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে এবং সেখানে কমপক্ষে 1 টি
                লেটার এবং 1 টি নাম্বার থাকতেই হবে।
              </Typography>
            </Stack>
          </Stack>
          <Button variant="contained"> সাইন আপ করুন </Button>
        </Stack>
        <Typography color="text.secondary">
          আপনার কি একাউন্ট রয়েছে?{" "}
          <Link to="/login">
            <Box
              component="span"
              sx={{
                textDecoration: "underline",
                color: "#9C27B0",
                fontWeight: 600,
              }}
            >
              লগইন করুন
            </Box>
          </Link>
        </Typography>
      </Stack>
    </Container>
  );
}
