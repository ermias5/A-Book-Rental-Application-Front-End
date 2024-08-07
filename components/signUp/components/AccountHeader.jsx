import React from "react";
import { Stack, Typography } from "@mui/material";
import accountLogoS from "../../../public/images/accountLogoS.png";
import Image from "next/image";

export default function AccountHeader({ title }) {
  return (
    <Stack spacing={3}>
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Image src={accountLogoS} alt="signUp logo" />
        <Typography fontSize={"1.5rem"}>Book Rent</Typography>
      </Stack>
      <Stack>
        <Typography title={title}>{title}</Typography>
      </Stack>
    </Stack>
  );
}
