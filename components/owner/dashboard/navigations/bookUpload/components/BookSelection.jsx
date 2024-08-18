import { Box, Button, Divider, MenuItem, TextField } from "@mui/material";
import React from "react";

export default function BookSelection() {
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
  return (
    // <Box>
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
          {option.label}
        </MenuItem>
      ))}
      <Divider sx={{ m: "1rem" }} />
      <Button>Add</Button>
    </TextField>
  );
}
