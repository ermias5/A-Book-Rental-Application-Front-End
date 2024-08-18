import React, { useEffect, useState } from "react";
import { Button, List, ListItem, Stack, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import axios from "axios";

export default function SideMenuInfo() {
  const [notifications, setNotifications] = useState([]);

  function handleNotifications() {
    <List>
      {notifications.map((notification) => (
        <ListItem key={notification.id}>{notification.message}</ListItem>
      ))}
    </List>;
  }

  return (
    <Stack>
      <Stack spacing={4} sx={{ pl: "1rem", width: "100%" }}>
        <Button onClick={handleNotifications}>
          <NotificationsNoneOutlinedIcon sx={{ color: "white", ml: "-5rem" }} />
          <Typography color={"white"}>Notification</Typography>
        </Button>
        <Button spacing={1}>
          <SettingsOutlinedIcon sx={{ color: "white", ml: "-7rem" }} />
          <Typography color={"white"}>Setting</Typography>
        </Button>
        <Button spacing={1}>
          <AccountCircleOutlinedIcon sx={{ color: "white", ml: "-5rem" }} />
          <Typography color={"white"}>Login As Owner</Typography>
        </Button>
      </Stack>
    </Stack>
  );
}
