import { Box, Button } from "@mui/material";
import { Post } from "../../interfaces/postInterfaces";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import styles from "./PostView.module.scss";

export default function PostView({ id, title, body }: Post) {
  return (
    <Box className={styles.post}>
      <ul className={styles.postData}>
        <li className={styles.dataPiece}>
          <Box>Title: {title}</Box>
        </li>
        <li className={styles.dataPiece}>
          <Box>Description: {body}</Box>
        </li>
        <li>
          <Box className={styles.manipulate}>
            <Button>
              <DeleteIcon />
            </Button>
            <Button>
              <EditIcon />
            </Button>
            <Button variant="contained">Details</Button>
          </Box>
        </li>
      </ul>
    </Box>
  );
}
