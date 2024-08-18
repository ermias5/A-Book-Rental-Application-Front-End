import { Container, Divider } from "@mui/material";
import React from "react";
import SideMenuHeader from "../../admin/dashboard/components/MenuHeader";
import SideMenuInfo from "./components/SideMenuInfo";
import LogOut from "../../admin/dashboard/components/LogOut";
import SideMenuBody from "./components/sideMenuBody";

export default function OwerSideMenu() {
  return (
    <Container sx={{ bgcolor: "#171B36", borderRadius: "1rem", width: "100%" }}>
      <SideMenuHeader />;
      <Divider sx={{ m: "1rem 0 1rem 0", borderColor: "white" }} />
      <SideMenuBody />
      <Divider sx={{ m: "2rem 0", borderColor: "white" }} />
      <SideMenuInfo />
      <Divider sx={{ m: "2rem 0 5rem 0", borderColor: "white" }} />
      <LogOut />
    </Container>
  );
}
