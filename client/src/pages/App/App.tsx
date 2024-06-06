import { Box } from "@mui/material";

import Header from "../../components/Header/Header";
import Users from "../../components/Users/Users";
import Footer from "../../components/Footer/Footer";

import styles from "./App.module.scss";

export default function App() {
  return (
    <Box className={styles.app}>
      <Header />
      <Users />
      <Footer />
    </Box>
  );
}
