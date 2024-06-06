import { Box } from "@mui/material";

import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box className={styles.header}>
      <Box className={styles.imageBlock}>
        <Link to="/">
          <img src="/logo.svg" alt="logo" />
        </Link>
      </Box>
    </Box>
  );
}
