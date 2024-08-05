import { Grid, Stack, Typography } from "@mui/material";
import CustomButton from "../UI/CustomButton";
import SearchBar from "./SearchBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RedeemIcon from "@mui/icons-material/Redeem";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CatagoryMenu from "./CatagoryMenu";

export default function TopNavBar() {
  return (
    <>
      <Stack alignItems={"center"}>
        <Grid
          container
          alignItems={"center"}
          width={"100%"}
          p={{ xs: "0.5rem 1rem", sm: "0.75rem 2rem", md: "0.5rem 6rem" }}
        >
          <Stack
            alignItems={"center"}
            direction={{ xs: "row-reverse", md: "row" }}
            spacing={2}
            sx={{ mr: "1.5rem" }}
          >
            <Grid item>
              <Typography color={"#f1641e"} fontSize={"2rem"}>
                Etsy
              </Typography>
            </Grid>
            <Grid item>
              <CatagoryMenu />
            </Grid>
          </Stack>
          <Grid item marginRight={"2rem"}>
            <SearchBar />
          </Grid>
          <Stack direction={"row"} spacing={2}>
            <CustomButton>
              <Typography>Sign in</Typography>
            </CustomButton>
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
        </Grid>
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
