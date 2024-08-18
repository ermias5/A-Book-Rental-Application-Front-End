import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";

export default function BookCoverUpload() {
  return (
    <Box component="button">
      <Stack direction={"row"}>
        <FileUploadIcon sx={{ color: "blue" }} />
        <Typography color={"blue"}>Upload Book Cover</Typography>
      </Stack>
    </Box>
  );
}
