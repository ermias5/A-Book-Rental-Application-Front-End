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
import AccountThumbnail from "../signUp/components/AccountThumbnail.jsx";
import AccountHeader from "../signUp/components/AccountHeader";
import { useForm } from "react-hook-form";
import { schema, Schema } from "../accountValidation/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link.js";

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

              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <Checkbox />
                <Typography> Remember Me</Typography>
              </Stack>
              <Button variant="contained">LOG IN</Button>
              <Stack direction={"row"} justifyContent={"center"} spacing={1}>
                <Typography>Haven not Account?</Typography>
                <Link href={"./signUp"} style={{ textDecoration: "none" }}>
                  <Typography> Sign up</Typography>
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
