import React, { useEffect, useState } from "react";
import { Button, List, ListItem, Stack, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import axios from "axios";

export default function SideMenuInfo({ acctCircleTitle }) {
  const [notifications, setNotifications] = useState([]);

  function handleNotifications() {
    <List>
      {notifications.map((notification) => (
        <ListItem key={notification.id}>{notification.message}</ListItem>
      ))}
    </List>;
  }

  // useEffect(() => {
  //   try {
  //     const fetchNotifications = async () => {
  //       // const response = await axios.get(
  //         // "http://localhost:8080/api/admin/notifications"
  //         // "https://book-rental-backend-xi.vercel.app/api/admin/notifications"
  //       );
  //       // setNotifications(response);
  //     };

  //     fetchNotifications();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  return (
    <Stack>
      <Stack spacing={4} sx={{ pl: "1rem" }}>
        {/* <Stack direction={"row"} spacing={1}>
          <NotificationsNoneOutlinedIcon sx={{ color: "white" }} />
          <Typography color={"white"}>Notification</Typography>
        </Stack> */}

        <Button onClick={handleNotifications}>
          <NotificationsNoneOutlinedIcon sx={{ color: "white", ml: "-5rem" }} />
          <Typography color={"white"}>Notification</Typography>
        </Button>
        <Button spacing={1}>
          <SettingsOutlinedIcon sx={{ color: "white", ml: "-7rem" }} />
          <Typography color={"white"}>Setting</Typography>
        </Button>
        <Button spacing={1}>
          <AccountCircleOutlinedIcon sx={{ color: "white" }} />
          <Typography color={"white"}>{acctCircleTitle}</Typography>
        </Button>
      </Stack>
    </Stack>
  );
}
