import React from "react";
import { Stack, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function SideMenuInfo({ acctCircleTitle }) {
  return (
    <Stack>
      <Stack spacing={4} sx={{ pl: "1rem" }}>
        <Stack direction={"row"} spacing={1}>
          <NotificationsNoneOutlinedIcon sx={{ color: "white" }} />
          <Typography color={"white"}>Notification</Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <SettingsOutlinedIcon sx={{ color: "white" }} />
          <Typography color={"white"}>Setting</Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <AccountCircleOutlinedIcon sx={{ color: "white" }} />
          <Typography color={"white"}>{acctCircleTitle}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
