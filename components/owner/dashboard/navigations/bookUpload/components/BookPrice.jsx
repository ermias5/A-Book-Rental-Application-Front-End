import {
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

export default function BookPrice() {
  const names = [1, 2, 3, 4, 5];
  return (
    <Stack direction={"row"} spacing={5}>
      <Select
        id="demo-multiple-name"
        label="Book Quantity"
        input={<OutlinedInput label="Book Quantity" />}
        fullWidth
        sx={{ width: "300px" }}
      >
        {names.map((name) => (
          <MenuItem
            key={name}
            value={name}
            //   style={getStyles(name, personName, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
      <TextField
        label="Rent price for three weeks"
        variant="outlined"
        required
        // value={usersData.email}
        // onChange={(event) => handleInputChange("email", event.target.value)}
      />
    </Stack>
  );
}
