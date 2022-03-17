import * as React from "react";
// import { useSelector, useDispatch } from 'react-redux'
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as Lien, Navigate } from "react-router-dom";
import api from "../../utils/api";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import Stack from "@mui/material/Stack";
// import LOGIN_SUCCESS from '../../..store/types'

const theme = createTheme();

export default function CreatePatientProfile() {
  // const dispatch = useDispatch()
  const [isErrorlastName, setIsErrorlastName] = React.useState<String | null>(
    null
  );
  const [isErrorFirstName, setIsErrorFirstName] = React.useState<String | null>(
    null
  );
  const [isErrorAddress, setIsErrorAddress] = React.useState<String | null>(
    null
  );
  const [isErrorPhone, setIsErrorPhone] = React.useState<String | null>(null);
  const [isErrorSecuNumber, setIsErrorSecuNumber] =
    React.useState<String | null>(null);
  const [responseBddStatus, setResponseBddStatus] =
    React.useState<Number | null>(null);

  const [value, setValue] = React.useState<Date | null>(new Date());

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const body = {
      email: data.get("email"),
      password: data.get("password"),
    };

    if (!String(data.get("lastName")).length) {
      setIsErrorlastName("Your lastName is invalid or empty!");
      return false;
    } else {
      setIsErrorlastName(null);
    }

    if (!String(data.get("firstName")).length) {
      setIsErrorFirstName("Your firstName is empty !");
      return false;
    } else {
      setIsErrorFirstName(null);
    }
    if (!String(data.get("phone")).length) {
      setIsErrorPhone("Your phone number is empty !");
      return false;
    } else {
      setIsErrorPhone(null);
    }
    if (!String(data.get("address")).length) {
      setIsErrorAddress("Your address is empty !");
      return false;
    } else {
      setIsErrorAddress(null);
    }
    if (!String(data.get("secuNumber")).length) {
      setIsErrorSecuNumber("Your secu number is empty !");
      return false;
    } else {
      setIsErrorSecuNumber(null);
    }

    try {
      const axiosResponse = await api.post("/users/auth/login", body);

      console.log(axiosResponse.data);
      console.log("statuslog", axiosResponse.status);
      setResponseBddStatus(axiosResponse.status);

      if (axiosResponse.status === 200) {
        setResponseBddStatus(200);
      } else {
        console.log("save data doesnt work");
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  if (responseBddStatus === 200) {
    return <Navigate to="/" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create your Profile
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              error={isErrorlastName ? true : false}
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="lastName"
              name="lastName"
              autoComplete="lastName"
              autoFocus
              helperText={isErrorlastName ? isErrorlastName : null}
            />
            <TextField
              error={isErrorFirstName ? true : false}
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="firstName"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              helperText={isErrorFirstName ? isErrorFirstName : null}
            />
            <TextField
              error={isErrorAddress ? true : false}
              margin="normal"
              required
              fullWidth
              id="address"
              label="address"
              name="address"
              autoComplete="address"
              autoFocus
              helperText={isErrorAddress ? isErrorAddress : null}
            />
            <TextField
              error={isErrorPhone ? true : false}
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="phone"
              autoFocus
              helperText={isErrorPhone ? isErrorPhone : null}
            />
            <TextField
              error={isErrorSecuNumber ? true : false}
              margin="normal"
              required
              fullWidth
              id="secuNumber"
              label="Secu Number"
              name="secuNumber"
              autoComplete="secuNumber"
              autoFocus
              helperText={isErrorSecuNumber ? isErrorSecuNumber : null}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DatePicker
                  disableFuture
                  label="Birth Date"
                  openTo="year"
                  views={["year", "month", "day"]}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
