import { Box } from "@mui/material";

import { UserViewData } from "../../interfaces/userInterfaces";

import styles from "./UserView.module.scss";
import { Link } from "react-router-dom";

export default function UserView({ id, name, email, phone }: UserViewData) {
  return (
    <Link to={`/${id}/posts`}>
      <Box className={styles.user}>
        <Box className={styles.imageBlock}>
          <img src="/man-user.svg" alt="user-icon" />
        </Box>
        <ul className={styles.userData}>
          <li className={styles.dataPiece}>
            <Box>Name: {name}</Box>
          </li>
          <li className={styles.dataPiece}>
            <Box>Email: {email}</Box>
          </li>
          <li className={styles.dataPiece}>
            <Box>Phone: {phone}</Box>
          </li>
        </ul>
      </Box>
    </Link>
  );
}
