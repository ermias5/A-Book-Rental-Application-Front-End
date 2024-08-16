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
export default function BooksTable() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstname",
        header: "No",
        size: 10,
      },
      {
        accessorKey: "name.firstname",
        header: "Author",
        size: 10,
      },
      //   {
      //     accessorKey: "name.firstname",
      //     header: "Owner",
      //     size:100
      //   },
      //   {
      //     accessorKey: "name.firstname",
      //     header: "Catagory",
      //   },
      //   {
      //     accessorKey: "name.firstname",
      //     header: "Bool Name",
      //   },
      //   {
      //     accessorKey: "name.firstname",
      //     header: "Status",
      //   },
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
