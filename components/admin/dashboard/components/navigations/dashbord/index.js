import React, { useMemo } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

// const data = [
//   {
//     name: 'hello',
//   },
//   {
//     name: {
//       firstName: "Jane",
//       lastName: "Doe",
//     },
//     address: "769 Dominic Grove",
//     city: "Columbus",
//     state: "Ohio",
//   },
//   {
//     name: {
//       firstName: "Joe",
//       lastName: "Doe",
//     },
//     address: "566 Brakus Inlet",
//     city: "South Linda",
//     state: "West Virginia",
//   },
//   {
//     name: {
//       firstName: "Kevin",
//       lastName: "Vandy",
//     },
//     address: "722 Emie Stream",
//     city: "Lincoln",
//     state: "Nebraska",
//   },
//   {
//     name: {
//       firstName: "Joshua",
//       lastName: "Rolluffs",
//     },
//     address: "32188 Larkin Turnpike",
//     city: "Charleston",
//     state: "South Carolina",
//   },
// ];
export default function AdminDashboardData() {
  // const columns = useMemo(
  //   () => [
  //     {
  //       accessorKey: "name.firstname",
  //       header: "No",
  //       // size: 150,
  //     },
  //     {
  //       accessorKey: "name.firstname",
  //       header: "Owner",
  //       // size: 150,
  //     },
  //   ],
  //   []
  // );

  // const table = useMaterialReactTable({
  //   columns,
  //   data,
  // });

  return (
    <Container>
      <Stack spacing={2}>
        <Stack sx={{ pt: "5px" }}>
          <Typography
            sx={{ bgcolor: "#fff", p: ".5rem", borderRadius: ".5rem" }}
          >
            Admin/Owners
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          <Grid item xs={3} sx={{ backgroundColor: "blue", height: "100vh" }}>
            statistics
          </Grid>
          <Grid item xs>
            <Stack spacing={2}>
              {/* <MaterialReactTable table={table} /> */}
              <Box sx={{ bgcolor: "red" }}>summary</Box>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
