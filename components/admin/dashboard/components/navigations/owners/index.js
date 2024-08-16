import React, { useMemo } from "react";
import { Stack, Typography } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

const data = [
  {
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Joe",
      lastName: "Doe",
    },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Kevin",
      lastName: "Vandy",
    },
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
];
export default function OwnersTable() {

  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstname",
        header: "No",
        // size: 150,
      },
      {
        accessorKey: "name.firstname",
        header: "Owner",
        // size: 150,
      },
      {
        accessorKey: "name.firstname",
        header: "Upload",
      },
      {
        accessorKey: "name.firstname",
        header: "Status",
      },
      {
        accessorKey: "name.firstname",
        header: "Action", 
      }
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <Stack spacing={2}>
      <Typography>Admin/Owners</Typography>
      <MaterialReactTable table={table} />
    </Stack>
  );
}
