import { Box, Container, Divider } from "@mui/material";
import React from "react";
import SideMenuHeader from "./components/MenuHeader";
import SideMenuBody from "./components/SideMenuBody";
import SideMenuInfo from "./components/SideMenuInfo";
import LogOut from "./components/LogOut";

export default function SideMenu() {
  return (
    <Container sx={{ bgcolor: "#171B36", borderRadius: "1rem" }}>
      <SideMenuHeader />;
      <Divider sx={{ m: "1rem 0 1rem 0", borderColor: "white" }} />
      <SideMenuBody title={"Books"} />
      <Divider sx={{ m: "2rem 0", borderColor: "white" }} />
      <SideMenuInfo acctCircleTitle={"Login as Book Owner"} />
      <Divider sx={{ m: "2rem 0 5rem 0", borderColor: "white" }} />
      <LogOut />
    </Container>
  );
}
