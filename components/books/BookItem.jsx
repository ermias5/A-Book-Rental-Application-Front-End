import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { currencyFormatter } from "../utils/CurrencyFormatter";

export default function BookItem(props) {
  return (
    <Grid item sm={2}>
      <Card
        sx={{
          width: "100%",
          position: "relative",
          boxShadow: "none",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          zIndex: 2,
          overflow: "visible",
          background: "none",
        }}
      >
        <Box width={1} sx={{ aspectRatio: 1 }}>
          <CardMedia
            component="img"
            width={1}
            sx={{ aspectRatio: 1 }}
            image={props.image}
            alt={props.title}
          />
          {/* <Image src={props.image} width={1} height={1} alt={props.title} /> */}
        </Box>

        {/* <CardContent> */}
        <Typography>{props.description}</Typography>
        {/* </CardContent> */}
        <Stack direction={"row"}>
          <Rating name="read-only" value={2.5} readOnly size="small" />
          <Typography fontSize={".8rem"}>(500)</Typography>
        </Stack>
        <Typography>{currencyFormatter.format(props.price)}</Typography>
        <Typography>{props.address}</Typography>
      </Card>
    </Grid>
  );
}
