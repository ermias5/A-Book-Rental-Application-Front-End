import ListOfBooks from "../components/books/ListOfBooks.jsx";
import TopNavBar from "../components/navBar/TopNavBar.jsx";
import { Box, Divider } from "@mui/material";
import Head from "next/head";

export default function HomePage() {
  const DUMMY_BOOKS = [
    {
      id: "b1",
      title: "Dertogada",
      price: 250,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1440333317i/16133457.jpg",
      address: "addis ababa",
      description: "great fiction of all time",
    },
    {
      id: "b2",
      title: "Ormomai",
      price: 200,
      image: "https://upload.wikimedia.org/wikipedia/en/f/fd/Oromai_cover.png",
      address: "addis ababa",
      description: "great fiction of all time",
    },
    {
      id: "b3",
      title: "Fkir eske mekabir",
      price: 350,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1590965645i/53713557.jpg",
      address: "addis ababa",
      description: "great fiction of all time",
    },
    {
      id: "b4",
      title: "Dertogada",
      price: 250,
      image:
        "https://www.mereb.shop/Image/Product/60978035/60978035-58-537-extraLarge.jpg",
      address: "addis ababa",
      description: "great fiction of all time",
    },
    {
      id: "b5",
      title: "Ormomai",
      price: 250,
      image: "https://upload.wikimedia.org/wikipedia/en/f/fd/Oromai_cover.png",
      address: "addis ababa",
      description: "great fiction of all time",
    },
    {
      id: "b6",
      title: "Fkir eske mekabir",
      price: 250,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1590965645i/53713557.jpg",
      address: "addis ababa",
      description: "great fiction of all time",
    },
    {
      id: "b7",
      title: "Dertogada",
      price: 250,
      image:
        "https://www.mereb.shop/Image/Product/60978035/60978035-58-537-extraLarge.jpg",
      address: "addis ababa",
      description: "great fiction of all time",
    },
    {
      id: "b8",
      title: "Ormomai",
      price: 250,
      image: "https://upload.wikimedia.org/wikipedia/en/f/fd/Oromai_cover.png",
      address: "addis ababa",
      description: "great fiction of all time",
    },
  ];
  return (
    <>
      <Head>
        <title>Book Rent Application</title>
        <meta name="description" content="Best site for book rent" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Box width={"100%"} minHeight={"100vh"}>
          <TopNavBar />
          <Divider />
          <ListOfBooks loadedBooks={DUMMY_BOOKS} />
        </Box>
      </main>
    </>
  );
}
