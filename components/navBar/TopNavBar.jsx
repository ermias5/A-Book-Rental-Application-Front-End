import { Box, Grid, Stack, Typography } from "@mui/material";
import CustomButton from "../UI/CustomButton";
import SearchBar from "./SearchBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RedeemIcon from "@mui/icons-material/Redeem";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CatagoryMenu from "./CatagoryMenu";
import Link from "next/link";

export default function TopNavBar() {
  return (
    <>
      <Stack alignItems={"center"} sx={{ overflow: "hidden" }}>
        <Stack
          container
          alignItems={"center"}
          justifyContent={"center"}
          direction={{ xs: "row", sm: "flex" }}
          width={"100%"}
          p={{ xs: "0.5rem 0", sm: "0.75rem 2rem", md: "0.5rem 6rem" }}
        >
          <Stack
            alignItems={"center"}
            direction={{ xs: "row-reverse", md: "row" }}
            spacing={{ xs: "0", sm: "1rem" }}
            sx={{ mr: { sm: "1.5rem" } }}
          >
            <Grid item>
              <Typography color={"#f1641e"} fontSize={"2rem"}>
                Book Rent
              </Typography>
            </Grid>
            <Grid item>
              <CatagoryMenu />
            </Grid>
          </Stack>
          <Grid item sx={{ m: { xs: "0 8px", sm: "2rem, 1rem" } }}>
            <SearchBar />
          </Grid>
          <Stack direction={"row"} spacing={{ xs: "0", sm: "1rem" }}>
            <Box display={{ xs: "none", sm: "flex" }}>
              <CustomButton>
                <Link href={"/signUp"} style={{ textDecoration: "none" }}>
                  <Typography>Sign up</Typography>
                </Link>
              </CustomButton>
            </Box>
            <CustomButton>
              <FavoriteBorderIcon />
            </CustomButton>
            <CustomButton>
              <RedeemIcon />
            </CustomButton>
            <CustomButton>
              <ShoppingCartCheckoutIcon />
            </CustomButton>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          display={{ xs: "none", sm: "flex" }}
          spacing={2}
        >
          <CustomButton>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <RedeemIcon />
              <Typography fontSize={".85rem"}>Gift Mode</Typography>
            </Stack>
          </CustomButton>
          <CustomButton>
            <Typography fontSize={".85rem"}>Back-to-School Savings</Typography>
          </CustomButton>
          <CustomButton>
            <Typography fontSize={".85rem"}>Home favourites</Typography>
          </CustomButton>
          <CustomButton>
            <Typography fontSize={".85rem"}>Fashion Finds</Typography>
          </CustomButton>
          <CustomButton>
            <Typography fontSize={".85rem"}>Registry</Typography>
          </CustomButton>
        </Stack>
      </Stack>
    </>
  );
}
