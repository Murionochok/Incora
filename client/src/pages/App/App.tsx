import { Box } from "@mui/material";

import Header from "../../components/Header/Header";
import Users from "../../components/Users/Users";
import Footer from "../../components/Footer/Footer";

import styles from "./App.module.scss";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { fetchUsers } from "../../redux/reducers/userReducer";

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <Box className={styles.app}>
      <Header />
      <Users />
      <Footer />
    </Box>
  );
}
