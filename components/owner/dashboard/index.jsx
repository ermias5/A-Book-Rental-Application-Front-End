import React from "react";
import { Grid } from "@mui/material";
import OwnerSideMenu from "./OwnerSideMenu";
export default function OwnerDashboard() {
  return (
    <Grid container direction={"row"} sx={{ bgcolor: "#f2f0f0" }}>
      <Grid item xs={2.5}>
        <OwnerSideMenu />
      </Grid>
      <Grid item xs={9.5}></Grid>
    </Grid>
  );
}
