import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Modal,
} from "@mui/material";
// import BookCoverUpload from "./components/BookCoverUpload";
import BookSelection from "./components/BookSelection";
import Image from "next/image";
import successImg from "../../../../../public/images/Frame 1000001570.png";
import axios from "axios";
import ENV_CONFIG from "../../../../../config/local.config";
import BookPrice from "./components/BookPriceAndQty";
import { jwtDecode } from "jwt-decode";

export default function BookUpload() {
  const [bookData, setBookData] = useState({});
  const [open, setOpen] = useState(false);

  const handleBookDescriptionOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleBookDescriptionData = (bookDescriptionData) => {
    setBookData((prevData) => ({
      ...prevData,
      ...bookDescriptionData,
    }));
  };

  const handleBookPricingData = (bookPricingData) => {
    setBookData((prevData) => ({
      ...prevData,
      ...bookPricingData,
    }));
  };

  // const handleBookCoverImage = (imageFile) => {
  //   setBookCoverImage(imageFile);
  // };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setBookData((prevData) => ({
        ...prevData,
        user: {
          id: decodedToken.id,
          name: decodedToken.name,
          email: decodedToken.email,
        },
      }));
    }
  }, []);

  async function handleBookSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${ENV_CONFIG.NEXT_PUBLIC}/api/book/create`,

        { bookData }
      );
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container maxWidth={"inherit"}>
      <Stack spacing={2}>
        <Stack sx={{ pt: "5px" }}>
          <Typography
            sx={{ bgcolor: "#fff", p: ".5rem", borderRadius: ".5rem" }}
          >
            Owner/Book Upload
          </Typography>
        </Stack>
        <Box component={"form"} onSubmit={handleBookSubmit}>
          <Stack
            alignItems={"center"}
            spacing={3}
            sx={{ bgcolor: "#fff", p: "1rem 0" }}
          >
            <Typography fontWeight={"bold"}>Upload New Book</Typography>
            <Stack alignItems={"center"} spacing={10}>
              <BookSelection
                handleBookDescriptionData={handleBookDescriptionData}
              />

              <BookPrice handleBookPricingData={handleBookPricingData} />
              {/* <BookCoverUpload handleBookCoverImage={handleBookCoverImage} /> */}
              <Button
                type="submit"
                variant="contained"
                sx={{ p: "1rem 7rem", borderRadius: ".5rem" }}
                // onClick={handleBookDescriptionOpen}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>

        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              height: 200,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Image
              src={successImg}
              sx={{ objectFit: "cover" }}
              alt="success image"
            />
          </Box>
        </Modal>
      </Stack>
    </Container>
  );
}
