import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";

export default function SideMenuBody({ handleActiveMenuItem }) {
  return (
    <Stack spacing={4}>
      <Button
        sx={{
          gap: 1,
          "&:hover": {
            bgcolor: "blue",
          },
        }}
        onClick={() => handleActiveMenuItem("ownerDashboard")}
      >
        <SpaceDashboardIcon sx={{ ml: "-5rem", color: "white" }} />
        <Typography color={"white"}>Dashboard</Typography>
      </Button>
      <Button
        sx={{
          gap: 1,
          "&:hover": {
            bgcolor: "blue",
          },
        }}
        onClick={() => handleActiveMenuItem("bookUpload")}
      >
        <AutoStoriesIcon sx={{ ml: "-4rem", color: "white" }} />
        <Typography color={"white"}>Book Upload</Typography>
      </Button>
      <Button spacing={1}>
        <ChangeHistoryIcon sx={{ color: "white", ml: "-8rem" }} />
        <Typography color={"white"}>Other</Typography>
      </Button>
      <Button spacing={1}>
        <ChangeHistoryIcon sx={{ color: "white", ml: "-8rem" }} />
        <Typography color={"white"}>Other</Typography>
      </Button>
    </Stack>
  );
}
