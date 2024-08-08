import React from "react";
import { Box, Divider, Stack } from "@mui/material";
import AccountHeader from "../../../signUp/components/AccountHeader";
import MenuIcon from "@mui/icons-material/Menu";

export default function SideMenuHeader() {
  return (
    <Stack direction={"row"} spacing={2} sx={{ pt: "1rem" }}>
      <MenuIcon fontSize="medium" sx={{ color: "white" }} />
      <AccountHeader color={"blue"} logoWidth={"38px"} logoHeight={"21px"} />
    </Stack>
  );
}
