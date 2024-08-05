import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import BookItem from "./BookItem";

export default function ListOfBooks(props) {
  return (
    <Stack
      direction={"column"}
      spacing={2}
      p={{ xs: "0.5rem 1rem", sm: "0.75rem 2rem", md: "0.5rem 6rem" }}
      mt={"1rem"}
    >
      <Stack>
        <Typography
          fontSize={"1rem"}
          //   fontWeight={"bold"}
          //   padding={"1rem 0 0 1rem"}
          color={"black"}
          ml={"2rem"}
        >
          Etsy Books
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {props.loadedBooks.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            image={book.image}
            title={book.title}
            address={book.address}
            description={book.description}
            price={book.price}
          />
        ))}
      </Grid>
    </Stack>
  );
}
