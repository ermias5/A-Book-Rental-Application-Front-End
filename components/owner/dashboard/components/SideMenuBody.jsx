import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";

export default function SideMenuBody() {
  return (
    <Stack spacing={4} width={"100%"}>
      <Button
        sx={{
          gap: 1,
          "&:hover": {
            bgcolor: "blue",
          },
        }}
        // onClick={() => handleMenuClick("dashboard")}
      >
        <SpaceDashboardIcon sx={{ ml: "-5rem", color: "white" }} />
        <Typography color={"white"}>Dashboard</Typography>
      </Button>
      {/* <Stack spacing={4}> */}
      <Button
        sx={{
          gap: 1,
          "&:hover": {
            bgcolor: "blue",
          },
        }}
        //   onClick={() => handleMenuClick("books")}
      >
        <AutoStoriesIcon sx={{ ml: "-5rem", color: "white" }} />
        <Typography color={"white"}>Book Upload</Typography>
      </Button>
      <Button spacing={1}>
        <ChangeHistoryIcon sx={{ color: "white", ml: "-7rem" }} />
        <Typography color={"white"}>Other</Typography>
      </Button>
      <Button spacing={1}>
        <ChangeHistoryIcon sx={{ color: "white", ml: "-7rem" }} />
        <Typography color={"white"}>Other</Typography>
      </Button>
      {/* </Stack> */}
    </Stack>
  );
}
