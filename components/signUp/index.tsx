import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AccountThumbnail from "./components/AccountThumbnail.jsx";
import AccountHeader from "./components/AccountHeader";
import { schema, Schema } from "../accountValidation/types/schema";
import Link from "next/link.js";
import axios from "axios";
import { useRouter } from "next/router.js";

export default function SignUp() {
  const [usersData, setUsersData] = useState<Schema>({
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    phoneNumber: "",
  });
  const router = useRouter();

  async function handleSubmit(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    try {
      // const response = await axios.post("http://localhost:8080/api/user", {
      const response = await axios.post(
        "https://book-rental-backend-xi.vercel.app/api/user",
        {
          // const response = await axios.post(
          // "https://book-rental-backend-xi.vercel.app/api/user",
          //   {
          usersData,
        }
      );
      console.log(response);

      const token = response.data.token;
      localStorage.setItem("token", token);

      router.push("/login");

      // if (response.data.data.role === "ADMIN") {
      //   router.push("/admin/dashboard");
      // } else {
      //   router.push("/");
      // }
    } catch (err) {
      console.log(err);
    }
  }

  function handleInputChange<T extends keyof Schema>(
    identifier: T,
    value: Schema[T]
  ) {
    setUsersData((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <AccountThumbnail />
        </Grid>
        <Grid item xs={6}>
          <Box padding={"7rem"}>
            <AccountHeader
              title={"Signup As Owner"}
              fontSize={"1.5rem"}
              color={"default"}
              logoWidth={"60px"}
              logoHeight={"33px"}
            />
            <Divider />
            <Box component={"form"} onSubmit={handleSubmit}>
              <Stack spacing={2} mt={"2rem"}>
                <Stack spacing={2}>
                  <TextField
                    id="Email address"
                    type="email"
                    label="Email address"
                    variant="outlined"
                    required
                    value={usersData.email}
                    onChange={(event) =>
                      handleInputChange("email", event.target.value)
                    }
                  />
                  <TextField
                    id="Password"
                    autoComplete="true"
                    label="Password"
                    type="password"
                    variant="outlined"
                    required
                    // error={!!errors.password}
                    value={usersData.password}
                    onChange={(event) =>
                      handleInputChange("password", event.target.value)
                    }
                  />
                  <TextField
                    id="Confirm Password"
                    label="Confirm Password"
                    autoComplete="on"
                    type="password"
                    variant="outlined"
                    required
                    // error={!!errors.confirmPassword}
                    value={usersData.confirmPassword}
                    onChange={(event) =>
                      handleInputChange("confirmPassword", event.target.value)
                    }
                  />
                  <TextField
                    id="Location"
                    label="Location"
                    variant="outlined"
                    value={usersData.location}
                    onChange={(event) =>
                      handleInputChange("location", event.target.value)
                    }
                  />
                  <TextField
                    id="Phone Number"
                    label="Phone Number"
                    variant="outlined"
                    // error={!!errors.phoneNumber}
                    value={usersData.phoneNumber}
                    onChange={(event) =>
                      handleInputChange("phoneNumber", event.target.value)
                    }
                  />
                </Stack>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                  <Checkbox />
                  <Typography>I Accept Tearms and Conditions</Typography>
                </Stack>
                <Button type="submit" variant="contained">
                  SIGN UP
                </Button>
                <Stack direction={"row"} justifyContent={"center"} spacing={1}>
                  <Typography>Already have account!</Typography>
                  <Link href={"./login"} style={{ textDecoration: "none" }}>
                    <Typography>Login</Typography>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
