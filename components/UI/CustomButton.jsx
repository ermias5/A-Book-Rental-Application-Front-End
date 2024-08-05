import { Box, Button } from "@mui/material";

export default function CustomButton({ children, ...props }) {
  return (
    <Box
      // component={"button"}
      variant="none"
      color="black"
      {...props}
      sx={{
        p: ".5rem",
        borderRadius: "1rem",
        border: "none",
        "&:hover": {
          backgroundColor: "#0e0e0e17",
        },
      }}
    >
      {children}
    </Box>
  );
}
