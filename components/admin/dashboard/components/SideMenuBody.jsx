import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";

export default function SideMenuBody({ title }) {
  function handleOwners() {}
  return (
    <Stack spacing={4}>
      <Button variant="contained" sx={{ gap: 1 }}>
        <SpaceDashboardIcon sx={{ ml: "-7rem" }} />
        <Typography color={"white"}>Dashboard</Typography>
      </Button>
      <Stack spacing={4}>
        <Button variant="contained" sx={{ gap: 1 }}>
          <AutoStoriesIcon sx={{ ml: "-7rem" }} />
          <Typography color={"white"}>{title}</Typography>
        </Button>
        <Button spacing={1} onClick={handleOwners}>
          <PermIdentityIcon sx={{ color: "white", ml: "-7rem" }} />
          <Typography color={"white"}>Owners</Typography>
        </Button>
        <Button spacing={1}>
          <ChangeHistoryIcon sx={{ color: "white", ml: "-7rem" }} />
          <Typography color={"white"}>Other</Typography>
        </Button>
        <Button spacing={1}>
          <ChangeHistoryIcon sx={{ color: "white", ml: "-7rem" }} />
          <Typography color={"white"}>Other</Typography>
        </Button>
      </Stack>
    </Stack>
  );
}
