import React, { useState } from "react";
import { Grid } from "@mui/material";
import SideMenu from "./SideMenu";
import OwnersTable from "./components/navigations/owners";
import BooksTable from "./components/navigations/books";
import AdminDashboardData from "./components/navigations/dashbord";

export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  function handleMenuClick(menu) {
    setActiveMenu(menu);
  }

  return (
    <Grid container direction={"row"} sx={{ bgcolor: "#f2f0f0" }}>
      <Grid item xs={2.5}>
        <SideMenu
          loginAsTitle={"Login as Book Owner"}
          booksForAdmin={"Books"}
          handleMenuClick={handleMenuClick}
          // activeMenu={activeMenu}
        />
      </Grid>
      <Grid item xs={9.5}>
        {activeMenu === "dashboard" && <AdminDashboardData />}
        {activeMenu === "books" && <BooksTable />}
        {activeMenu === "owners" && <OwnersTable />}
      </Grid>
    </Grid>
  );
}
