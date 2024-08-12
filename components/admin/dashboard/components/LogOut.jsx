import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button, Typography } from "@mui/material";

export default function LogOut() {
  return (
    <Button variant="contained" sx={{ gap: 1 ,bgcolor:'#867878', mb:'1.5rem'}}>
      <LogoutIcon />
      <Typography>Logout</Typography>
    </Button>
  );
}
