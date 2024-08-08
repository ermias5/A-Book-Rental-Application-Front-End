import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <FormControl
      variant="outlined"
      display="flex"
      size=""
      sx={{
        // minWidth: "100ch",
        minWidth: { xs: "none", md: "100ch" },
        flex: "1",
        display: "flex",
      }}
    >
      <OutlinedInput
        // placeholder="Search For Everything"
        // placeholder={{ xs: "Search", sm: "Search For Everything" }}
        sx={{
          borderRadius: "5rem",
          // placeholder: { xs: "Search", sm: "Search For Everything" },
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="search"
              // onClick={handleSearch}
              edge="end"
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                mr: "1px",
                aspectRatio: "initial",
                bgcolor: "#f1641e",
                "&:hover": {
                  bgcolor: "#c2673a",
                },
                p: "0.25rem 1rem",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "1.4rem" },
              }}
            >
              <Box display={"flex"}>
                <SearchIcon sx={{ color: "white" }} />
              </Box>
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
