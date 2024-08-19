import React, { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";

export default function BookCoverUpload({ handleBookCoverImage }) {
  const [coverImage, setCoverImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setCoverImage(file);
    handleBookCoverImage(file);
  };

  return (
    <Box component="button">
      <TextField
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        fullWidth
      />
      {coverImage && (
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => handleBookCoverImage(null)}
        >
          Remove
        </Button>
      )}
      {/* <Stack direction={"row"}>
        <FileUploadIcon sx={{ color: "blue" }} />
        <Typography color={"blue"}>Upload Book Cover</Typography>
      </Stack> */}
    </Box>
  );
}
