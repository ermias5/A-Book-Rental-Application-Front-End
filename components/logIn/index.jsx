import { Box, Divider, Grid, Stack, TextField } from "@mui/material";
import AccountThumbnail from "../signUp/components/AccountThumbnail.jsx";
import AccountHeader from "../signUp/components/AccountHeader.jsx";
import AccountInfoAndNavigation from "../signUp/components/AccountInfoAndNavigation.jsx";

export default function LogIn() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <AccountThumbnail />
        </Grid>
        <Grid item xs={6}>
          <Box padding={"7rem"}>
            <AccountHeader title={"Login"} />
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
              </Stack>
              <AccountInfoAndNavigation
                terms={"Remember Me"}
                history={"Haven not Account? "}
                accountSwitch={"Sign up"}
                path={"./signUp"}
                registration={"LOG IN"}
              />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
