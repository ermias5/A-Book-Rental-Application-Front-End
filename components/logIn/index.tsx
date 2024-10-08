import {
  Alert,
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
import { Schema } from "../accountValidation/types/schema";
import Link from "next/link.js";
import { useRouter } from "next/router.js";
import { useState } from "react";
import axios from "axios";
import ENV_CONFIG from "../../config/local.config.js";

export default function LogIn() {
  const [userData, setUserData] = useState<Schema>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  async function handleSubmit(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${ENV_CONFIG.NEXT_PUBLIC}/api/user/login`,
        {
          userData,
        }
      );

      console.log("logged in staff", response);

      const token = response.data.token;
      localStorage.setItem("token", token);

      if (response.data.user.role === "ADMIN") {
        router.push("/admin/dashboard");
      } else if (
        response.data.user.role === "OWNER" &&
        response.data.user.isApproved === true
      ) {
        router.push(`/owner/ ${response.data.user.id}`);
      } else {
        router.push("/");
      }
    } catch (err: any) {
      setError(
        err.response?.data.message ||
          "Account doesn't exist please sign up first"
      );
      console.log(err);
    }
  }

  function handleInputChange<T extends keyof Schema>(
    identifier: T,
    value: Schema[T]
  ) {
    setUserData((prevValues) => ({
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
            <AccountHeader title={"Login"} />
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
                    value={userData.email}
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
                    value={userData.password}
                    onChange={(event) =>
                      handleInputChange("password", event.target.value)
                    }
                  />
                </Stack>

                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                  <Checkbox />
                  <Typography> Remember Me</Typography>
                </Stack>
                {error && <Alert severity="error">{error}</Alert>}
                <Button type="submit" variant="contained">
                  LOG IN
                </Button>
                <Stack direction={"row"} justifyContent={"center"} spacing={1}>
                  <Typography>Haven not Account?</Typography>
                  <Link href={"./signUp"} style={{ textDecoration: "none" }}>
                    <Typography> Sign up</Typography>
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
