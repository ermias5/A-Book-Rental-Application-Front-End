import React, { useState } from "react";
import { Grid } from "@mui/material";
import OwnerSideMenu from "./OwnerSideMenu";
import OwnerDashboardData from "./navigations/dashboard";
import BookUpload from "./navigations/bookUpload";
export default function OwnerDashboard() {
  const [activeMenuItem, setActiveMenuItem] = useState("");

  function handleActiveMenuItem(menu) {
    setActiveMenuItem(menu);
  }
  return (
    <Grid container direction={"row"} sx={{ bgcolor: "#f2f0f0" }}>
      <Grid item xs={2.5}>
        <OwnerSideMenu handleActiveMenuItem={handleActiveMenuItem} />
      </Grid>
      <Grid item xs={9.5}>
        {activeMenuItem === "ownerDashboard" && <OwnerDashboardData />}
        {activeMenuItem === "bookUpload" && <BookUpload />}
      </Grid>
    </Grid>
  );
}
