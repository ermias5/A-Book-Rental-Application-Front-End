import { Grid } from "@mui/material";
import SideMenu from "../../admin/dashboard/SideMenu.jsx";
import React from "react";

export default function OwnerDashboard() {
  return (
    <>
      <Grid container direction={"row"} sx={{ bgcolor: "#f2f0f0" }}>
        <Grid item xs={2.5}>
          <SideMenu
            loginAsTitle={"Login As Admin"}
            booksForAdmin={"Book Upload"}
          />
        </Grid>
        <Grid item xs>
          {/* <AdminDashboardData /> */}
          {/* <BooksTable /> */}
          {/* <OwnersTable /> */}
          Owner/Dashboard
        </Grid>
      </Grid>
    </>
  );
}
