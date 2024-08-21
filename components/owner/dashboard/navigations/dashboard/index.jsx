import React, { useEffect, useMemo, useState } from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import ENV_CONFIG from "../../../../../config/local.config";

export default function OwnerDashboardData() {
  const [ownerBooks, setOwnerBooks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const decodedToken = jwtDecode(token);

    const ownerId = decodedToken.id;

    const fetchOwnerBooks = async () => {
      try {
        const response = await axios.get(
          `${ENV_CONFIG.NEXT_PUBLIC}/api/book/books/${ownerId}`,
          { ownerId }
        );
        setOwnerBooks(response.data);
      } catch (err) {
        console.error("error fetching new books", err);
      }
    };

    fetchOwnerBooks();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "no",
        header: "No",
        size: 50,
        minSize: 25,
        maxSize: 75,
      },
      // {
      //   accessorKey: "",
      //   header: "Book no",
      //   size: 50,
      //   minSize: 25,
      //   maxSize: 75,
      // },
      {
        accessorKey: "bookName",
        header: "Book Name",
      },
      {
        accessorKey: "isApproved",
        header: "Status",
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 50,
        minSize: 25,
        maxSize: 75,
      },

      {
        accessorKey: "isApproved",
        header: "Status",
        Cell: ({ row }) => (
          <Button
            variant="contained"
            // color={isActive ? "primary" : "secondary"}
            // onClick={handleToggle}
          >
            {/* {row.orginal.isApproved ? "Active" : "Inactive"} */}
            Active
          </Button>
        ),
        size: 50,
        minSize: 25,
        maxSize: 75,
      },
    ],
    []
  );

  const tableData = useMemo(
    () =>
      ownerBooks.map((ownerBook) => ({
        no: ownerBook.id,
        author: ownerBook.author,
        category: ownerBook.category,
        bookName: ownerBook.title,
        isApproved: ownerBook.isApproved,
        price: ownerBook.price,
      })),
    [ownerBooks]
  );

  const table = useMaterialReactTable({
    columns,
    data: tableData,
  });

  return (
    <Container>
      <Stack spacing={2}>
        <Stack sx={{ pt: "5px" }}>
          <Typography
            sx={{ bgcolor: "#fff", p: ".5rem", borderRadius: ".5rem" }}
          >
            Owner/Dashboard
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          <Grid item xs={3} sx={{ backgroundColor: "blue", height: "100vh" }}>
            statistics
          </Grid>
          <Grid item xs={9}>
            <Stack spacing={2}>
              <MaterialReactTable table={table} />
              <Box sx={{ bgcolor: "red" }}>summary</Box>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
