import {
  Box,
  Button,
  Divider,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function BookSelection({ handleBookDescriptionData }) {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");

  const handleBookDescriptionOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleBookDescriptionSubmit = async () => {
    const bookDescriptionData = {
      title,
      author,
      category,
    };
    handleBookDescriptionData(bookDescriptionData);
    handleClose();
  };

  const currencies = [
    {
      value: "USD",
      label: "book1",
    },
    {
      value: "EUR",
      label: "book2",
    },
    {
      value: "BTC",
      label: "book3",
    },
  ];

  const categories = ["FICTION", "HISTORY", "SCIENCE"];

  return (
    <>
      <TextField
        select
        label="Search book by name or Author"
        defaultValue="Search..."
        variant="filled"
        fullWidth
        sx={{ width: "300px" }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
        <Divider sx={{ m: "1rem" }} />
        <Button onClick={handleBookDescriptionOpen}>Add</Button>
      </TextField>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Add Book
          </Typography>
          <TextField
            label="Book Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Author Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <TextField
            select
            label="Catagory"
            variant="filled"
            fullWidth
            sx={{ mb: 2 }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((option) => (
              <MenuItem key={option.id} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            onClick={handleBookDescriptionSubmit}
          >
            Add
          </Button>
        </Box>
      </Modal>
    </>
  );
}
