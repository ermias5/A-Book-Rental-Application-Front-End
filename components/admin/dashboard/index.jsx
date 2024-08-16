import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import SideMenu from "./SideMenu";
import OwnersTable from "./components/navigations/owners";
import BooksTable from "./components/navigations/books";
import AdminDashboardData from "./components/navigations/dashbord";

export default function AdminDashboard() {
  const [dashboardContent, setDashboardContent] = useState({
    selectedContent: undefined,
  });

  return (
    <Grid container direction={"row"} sx={{ bgcolor: "#f2f0f0" }}>
      <Grid item xs={2.5}>
        <SideMenu
          loginAsTitle={"Login as Book Owner"}
          booksForAdmin={"Books"}
        />
      </Grid>
      <Grid item xs>
        {/* <AdminDashboardData /> */}
        {/* <BooksTable /> */}
        <OwnersTable />
      </Grid>
    </Grid>
  );
}
