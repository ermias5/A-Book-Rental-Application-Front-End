import { Box, Divider, Grid, Stack, TextField } from "@mui/material";
import AccountThumbnail from "../signUp/components/AccountThumbnail.jsx";
import AccountHeader from "../signUp/components/AccountHeader.jsx";
import AccountInfoAndNavigation from "../signUp/components/AccountInfoAndNavigation.jsx";
import { useForm } from "react-hook-form";
import { schema, Schema } from "../accountValidation/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LogIn() {
  const {
    register,
    formState: { errors },
  } = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
  });

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
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
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
