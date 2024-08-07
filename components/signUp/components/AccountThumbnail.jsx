import React from "react";
import { Box } from "@mui/system";
import accountLogo from "../../../public/images/Group 1.png";
import Image from "next/image";

export default function AccountThumbnail() {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100%"}
        overflowY={"none"}
        sx={{ backgroundColor: "#171B36" }}
      >
        <Image src={accountLogo} alt="account image" />
      </Box>
    </>
  );
}
