import React from "react";
import { Button, Checkbox, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function AccountInfoAndNavigation({
  terms,
  registration,
  history,
  path,
  accountSwitch,
}) {
  return (
    <>
      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <Checkbox />
        <Typography> {terms}</Typography>
      </Stack>
      <Button variant="contained"> {registration}</Button>
      <Stack direction={"row"} justifyContent={"center"} spacing={1}>
        <Typography>{history}</Typography>
        <Link href={path} style={{ textDecoration: "none" }}>
          <Typography> {accountSwitch}</Typography>
        </Link>
      </Stack>
    </>
  );
}
