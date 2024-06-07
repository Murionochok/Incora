import { Box } from "@mui/material";
import { Comment } from "../../interfaces/commentInterface";

import styles from "./CommentView.module.scss";
export default function CommentView({ body, email }: Comment) {
  return (
    <Box>
      <Box className={styles.comment}>
        <Box className={styles.imageBox}>
          <img src="/man-user.svg" alt="user-icon" />
        </Box>
        <Box className={styles.data}>
          <Box>{email}</Box>
          <Box className={styles.body}>{body}</Box>
        </Box>
      </Box>
    </Box>
  );
}
