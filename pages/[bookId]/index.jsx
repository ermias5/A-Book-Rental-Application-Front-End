import TopNavBar from "../../components/navBar/TopNavBar.jsx";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";

export default function DetailPage() {
  const router = useRouter();

  const bookId = router.query.bookId;
  return (
    <>
      <TopNavBar />
      <Grid container>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </>
  );
}
