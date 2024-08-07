import { Box, Menu, MenuItem, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function CatagoryMenu() {
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("hi");
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <>
      <Box
        variant="none"
        color="black"
        sx={{
          p: ".5rem",
          borderRadius: "1rem",
          border: "none",
          "&:hover": {
            backgroundColor: "#0e0e0e17",
          },
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <MenuIcon />
          <Typography fontSize={".8rem"} display={{ xs: "none", md: "flex" }}>
            Catagories
          </Typography>
        </Stack>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Typography>Profile</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}
