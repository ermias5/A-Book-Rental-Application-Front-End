import React, { useState } from "react";
import { Grid } from "@mui/material";
import OwerSideMenu from "./ownerSideMenu";

export default function OwnerDashboard() {
  
  

  return (
    <Grid container direction={"row"} sx={{ bgcolor: "#f2f0f0" }}>
      <Grid item xs={2.5}>
        < OwerSideMenu />
      </Grid>
      <Grid item xs={9.5}>
        {/* {activeMenu === "dashboard" && <AdminDashboardData />}
        {activeMenu === "books" && <BooksTable />}
        {activeMenu === "owners" && <OwnersTable />} */}
      </Grid>
    </Grid>
  );
}
