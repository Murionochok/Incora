import { Box } from "@mui/material";
import { Post } from "../../interfaces/postInterfaces";
import { Link } from "react-router-dom";

import styles from "./PostView.module.scss";

export default function PostView({ id, title, body }: Post) {
  return (
    <Link to={`/post/${id}`}>
      <Box className={styles.post}>
        <ul className={styles.postData}>
          <li className={styles.dataPiece}>
            <Box>Title: {title}</Box>
          </li>
          <li className={styles.dataPiece}>
            <Box>Description: {body}</Box>
          </li>
        </ul>
      </Box>
    </Link>
  );
}
