import React, { useEffect, useState } from "react";
// import SideMenu from "./components/SideMenu";
import { Box, Grid, Typography } from "@mui/material";
import SideMenu from "./SideMenu";
import supabase from "../../../config/supabaseClient";

export default function AdminDashboard() {
  // const [fetchError, setFetchError] = useState(null);
  // const [users, setUsers] = useState(null);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const { data, error } = await supabase.from("User").select();
  //     console.log("data from the backend", data);

  //     if (error) {
  //       setFetchError("couldn't fetch users");
  //       setUsers(null);
  //       console.log("errorFetchingUserData",error);
  //     }
  //     if (data) {
  //       setUsers(data);
  //       setFetchError(null);
  //     }
  //   };

  //   fetchUsers();
  // }, []);
  return (
    <Grid container direction={"row"} gap={2}>
      <Grid item xs={2.5}>
        <SideMenu />
      </Grid>
      <Grid item xs sx={{ bgcolor: "violet" }}>
        {/* <Box height={"100vh"}>
          {fetchError && <Typography>{fetchError}</Typography>}
          {users && (
            <Box>
              {users.map((user) => (
                <Typography>{user.name}</Typography>
              ))}
            </Box>
          )}
        </Box> */}
      </Grid>
    </Grid>
  );
}
