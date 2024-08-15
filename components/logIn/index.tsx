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
import { useRouter } from "next/router.js";
import { useState } from "react";
import axios from "axios";

export default function LogIn() {
  // const {
  //   register,
  //   formState: { errors },
  // } = useForm<Schema>({
  //   mode: "all",
  //   resolver: zodResolver(schema),
  // });

  const [userData, setUserData] = useState<Schema>({
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
      const response = await axios.post(
        // "http://localhost:8080/api/user/login",
        "https://book-rental-backend-xi.vercel.app/api/user/login",
        {
          // const response = await axios.post(
          //   "https://book-rental-backend-xi.vercel.app//api/user",
          //   {
          userData,
        }
      );
      console.log(response);

      // const token = response.data.token;
      // localStorage.setItem("token", token);

      // router.push("/login");

      if (response.data.user.role === "ADMIN") {
        router.push("/admin/dashboard");
      } else {
        router.push("/");
      }
    } catch (err) {
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
