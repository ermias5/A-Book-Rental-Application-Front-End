import { Box, Button, MenuItem, Stack, TextField } from "@mui/material";
import { useState } from "react";

const BookPrice = ({ handleBookPricingData }) => {
  const [bookQuantity, setBookQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleBookPricingSubmit = () => {
    const bookPricingData = {
      price,
      bookQuantity,
    };

    handleBookPricingData(bookPricingData);
    // handleClose();
  };

  const bookQuantities = [1, 2, 3, 4, 5];

  return (
    <Box>
      <Stack direction={"row"} spacing={5}>
        <TextField
          select
          label="Book Quantity"
          fullWidth
          sx={{ width: "300px" }}
          value={bookQuantity}
          onChange={(e) => setBookQuantity(e.target.value)}
        >
          {bookQuantities.map((option) => (
            <MenuItem key={option.id} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Rent price for three weeks"
          variant="outlined"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={handleBookPricingSubmit}
          sx={{ borderRadius: "1rem" }}
        >
          Price set
        </Button>
      </Stack>
      ;
    </Box>
  );
};

export default BookPrice;
