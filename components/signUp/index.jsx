import React from "react";
import { Box, Divider, Grid, Stack, TextField } from "@mui/material";
import AccountThumbnail from "./components/AccountThumbnail.jsx";
import AccountHeader from "./components/AccountHeader.jsx";
import AccountInfoAndNavigation from "./components/AccountInfoAndNavigation.jsx";

export default function SignUp() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <AccountThumbnail />
        </Grid>
        <Grid item xs={6}>
          <Box padding={"7rem"}>
            <AccountHeader title={"Signup As Owner"} />
            <Divider />
            <Stack spacing={2} mt={"2rem"}>
              <Stack spacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Email address"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Confirm Password"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                />
              </Stack>
              <AccountInfoAndNavigation
                terms={"I Accept Tearms and Conditions"}
                history={"Already have account! "}
                registration={"SIGN UP"}
                path={"./login"}
                accountSwitch={"Login"}
              />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
