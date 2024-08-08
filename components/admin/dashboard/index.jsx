import React from "react";
// import SideMenu from "./components/SideMenu";
import { Box, Grid } from "@mui/material";
import SideMenu from "./SideMenu";

export default function AdminDashboard() {
  return (
    <Grid container direction={"row"} gap={2}>
      <Grid item xs={2.5}>
        <SideMenu />
      </Grid>
      <Grid item xs sx={{ bgcolor: "violet" }}>
        <Box height={"100vh"}>dashboard</Box>
      </Grid>
    </Grid>
  );
}
