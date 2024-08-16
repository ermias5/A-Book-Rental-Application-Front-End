import React, { useMemo, useState, useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import axios from "axios";
import { Email } from "@mui/icons-material";

// const data = [
//   {
//     name: {
//       firstName: "John",
//       lastName: "Doe",
//     },
//     address: "261 Erdman Ford",
//     city: "East Daphne",
//     state: "Kentucky",
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
export default function OwnersTable() {
  const [newOwners, setNewOwners] = useState([]);

  useEffect(() => {
    const fetchNewOwners = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          // "http://localhost:8080/api/user/users",
          "https://book-rental-backend-xi.vercel.app/api/user/users",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("z resonse", response);

        setNewOwners(response.data);
      } catch (err) {
        console.error("Error fetching new owners:", err);
      }
    };

    fetchNewOwners();
  }, []);

  console.log("newly register owners", newOwners);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "No",
        // size: 150,
      },
      {
        accessorKey: "name",
        header: "Owner",
        // size: 150,
      },
      {
        accessorKey: "email",
        header: "Upload",
      },
      {
        accessorKey: "location",
        header: "Status",
      },
      {
        accessorKey: "isApproved",
        header: "Action",
      },
    ],
    []
  );

  const tableData = useMemo(
    () =>
      newOwners.map((owner) => ({
        id: owner.id,
        name: owner.name,
        email: owner.email,
        location: owner.location,
        isApproved: owner.isApproved,
      })),
    [newOwners]
  );

  const table = useMaterialReactTable({
    columns,
    data: tableData,
  });

  return (
    <Stack spacing={2}>
      <Typography>Admin/Owners</Typography>
      <MaterialReactTable table={table} />
    </Stack>
  );
}
