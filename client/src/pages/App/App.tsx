import { Box } from "@mui/material";

import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import styles from "./App.module.scss";

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
      <Outlet />
      <Footer />
    </Box>
  );
}
