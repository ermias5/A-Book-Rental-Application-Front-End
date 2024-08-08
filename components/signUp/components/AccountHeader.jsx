import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import accountLogoS from "../../../public/images/accountLogoS.png";
import Image from "next/image";

export default function AccountHeader({
  title,
  color,
  fontSize,
  logoHeight,
  logoWidth,
}) {
  return (
    <Stack spacing={3}>
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Box height={logoHeight} width={logoWidth} position={"relative"}>
          <Image
            src={accountLogoS}
            alt="Book logo"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Typography fontSize={fontSize} color={color} noWrap>
          Book Rent
        </Typography>
      </Stack>
      <Stack>
        <Typography title={title}>{title}</Typography>
      </Stack>
    </Stack>
  );
}
