import React, { useMemo, useState, useEffect } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import axios from "axios";
import ENV_CONFIG from "../../../../../../config/local.config";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

export default function OwnersTable() {
  const [newOwners, setNewOwners] = useState([]);
  console.log("new owners", newOwners);

  const token = localStorage.getItem("token");

  const handleApprove = async (ownerId) => {
    try {
      const response = await axios.put(
        `${ENV_CONFIG.NEXT_PUBLIC}/api/user/updateOwner`,
        { ownerId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setNewOwners((prevData) => [
        ...prevData.filter((owner) => owner.id !== ownerId),
        response.data,
      ]);
    } catch (error) {
      console.error("Error approving owner:", error);
    }
  };

  useEffect(() => {
    const fetchNewOwners = async () => {
      try {
        const response = await axios.get(
          `${ENV_CONFIG.NEXT_PUBLIC}/api/user/users`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

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
        size: 50,
        minSize: 25,
        maxSize: 75,
      },
      {
        accessorKey: "email",
        header: "Owner",
        size: 50,
        minSize: 25,
        maxSize: 75,
      },
      {
        accessorKey: "name",
        header: "Upload",
      },
      {
        accessorKey: "phoneNumber",
        header: "Status",
        size: 50,
        minSize: 25,
        maxSize: 75,
      },
      {
        accessorKey: "location",
        header: "Location",
      },
      {
        accessorKey: "isApproved",
        header: "Action",
        Cell: ({ row }) => (
          <Stack spacing={2} direction={"row"}>
            <VisibilityIcon fontSize="small" />
            <DeleteIcon fontSize="small" sx={{ color: "red" }} color="red" />
          </Stack>
        ),
        size: 50,
        minSize: 25,
        maxSize: 75,
      },
      {
        accessorKey: "role",
        header: "",
        Cell: ({ row }) => (
          <Box
            component={"button"}
            sx={{
              borderRadius: "4px",
              height: "30px",
              width: "100px",
              bgcolor: row.original.isApproved === true ? "#563bf1" : "#bebbc0",
              border: "none",
              color: "white",
            }}
            onClick={() => handleApprove(row.original.id)}
          >
            {row.original.isApproved ? "Approved" : "Approve"}
          </Box>
        ),
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
    <Container maxWidth={"inherit"}>
      <Stack spacing={2}>
        <Stack sx={{ pt: "5px" }}>
          <Typography
            sx={{ bgcolor: "#fff", p: ".5rem", borderRadius: ".5rem" }}
          >
            Admin/Owners
          </Typography>
        </Stack>

        <MaterialReactTable
          table={table}
          enableColumnResizing
          muiTableBodyRowProps={({ row }) => ({
            sx: {
              height: "30px", // Set the desired row height
            },
          })}
        />
      </Stack>
    </Container>
  );
}
