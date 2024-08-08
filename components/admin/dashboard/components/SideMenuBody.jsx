import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";

export default function SideMenuBody({ title }) {
  return (
    <Stack spacing={4}>
      <Button variant="contained" sx={{ gap: 1 }}>
        <SpaceDashboardIcon sx={{ ml: "-100px" }} />
        <Typography color={"white"}>Dashboard</Typography>
      </Button>
      <Stack spacing={4} sx={{ pl: "1rem" }}>
        <Stack direction={"row"} spacing={1}>
          <AutoStoriesIcon sx={{ color: "white" }} />
          <Typography color={"white"}>{title}</Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <PermIdentityIcon sx={{ color: "white" }} />
          <Typography color={"white"}>Owners</Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <ChangeHistoryIcon sx={{ color: "white" }} />
          <Typography color={"white"}>Other</Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <ChangeHistoryIcon sx={{ color: "white" }} />
          <Typography color={"white"}>Other</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
