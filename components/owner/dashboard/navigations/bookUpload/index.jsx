import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import BookSelection from "./bookSelection";
import BookPrice from "./components/BookPrice";
import BookCoverUpload from "./components/BookCoverUpload";

export default function BookUpload() {
  return (
    <Container maxWidth={"inherit"}>
      <Stack spacing={2}>
        <Stack sx={{ pt: "5px" }}>
          <Typography
            sx={{ bgcolor: "#fff", p: ".5rem", borderRadius: ".5rem" }}
          >
            Owner/Book Upload
          </Typography>
        </Stack>
        <Stack
          alignItems={"center"}
          spacing={3}
          sx={{ bgcolor: "#fff", pt: "1rem", height: "100vh" }}
        >
          <Typography fontWeight={"bold"}>Upload New Book</Typography>
          <Stack alignItems={"center"} spacing={10}>
            <BookSelection />
            <BookPrice />
            <BookCoverUpload />
            <Button
              type="submit"
              variant="contained"
              sx={{ p: "1rem 7rem", borderRadius: ".5rem" }}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
