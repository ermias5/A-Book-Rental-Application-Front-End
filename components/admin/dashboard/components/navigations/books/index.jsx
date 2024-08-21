import React, { useEffect, useMemo, useState } from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import axios from "axios";
import ENV_CONFIG from "../../../../../../config/local.config";

export default function BooksTable() {
  const [newBooks, setNewBooks] = useState([]);

  useEffect(() => {
    const fetchNewBooks = async () => {
      try {
        const response = await axios.get(
          `${ENV_CONFIG.NEXT_PUBLIC}/api/book/books`
        );

        console.log("book response: ", response);

        setNewBooks(response.data);
      } catch (err) {
        console.error("error fetching new books", err);
      }
    };

    fetchNewBooks();
  }, []);

  console.log("books from state", newBooks);

  const columns = useMemo(
    () => [
      {
        accessorKey: "no",
        header: "No",
        size: 50,
        minSize: 25,
        maxSize: 75,
      },
      {
        accessorKey: "author",
        header: "Author",
        size: 50,
        minSize: 25,
        maxSize: 75,
      },
      {
        accessorKey: "owner",
        header: "Owner",
      },
      {
        accessorKey: "category",
        header: "Category",
        size: 50,
        minSize: 25,
        maxSize: 75,
      },
      {
        accessorKey: "bookName",
        header: "Book Name",
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
      newBooks.map((book) => ({
        no: book.id,
        author: book.author,
        owner: book.owner.name,
        category: book.category,
        bookName: book.title,
        isApproved: book.isApproved,
      })),
    [newBooks]
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
            Admin/Books
          </Typography>
        </Stack>
        <MaterialReactTable table={table} />
      </Stack>
    </Container>
  );
}
