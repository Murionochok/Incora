import { Box } from "@mui/material";

import { UserViewData } from "../../interfaces/userInterfaces";

import styles from "./UserView.module.scss";

export default function UserView({
  name,
  email,
  phone,
  postsAmount,
}: UserViewData) {
  return (
    <Box className={styles.user}>
      <Box className={styles.imageBlock}>
        <img src="/man-user.svg" alt="user-icon" />
      </Box>
      <ul className={styles.userData}>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Phone: {phone}</li>
        <li>PostsAmount: {postsAmount}</li>
      </ul>
    </Box>
  );
}
