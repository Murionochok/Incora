import { Box, Button } from "@mui/material";
import { Post } from "../../interfaces/postInterfaces";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import styles from "./PostView.module.scss";
import { useState } from "react";
import PopUp from "../PopUp/PopUp";

export default function PostView({ id, title, body }: Post) {
  const [openEdit, setOpenEdit] = useState(false);

  const toggleOpenEdit = () => {
    setOpenEdit((prev) => !prev);
  };

  return (
    <>
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
              <Button onClick={toggleOpenEdit}>
                <EditIcon />
              </Button>
              <Button variant="contained">Details</Button>
            </Box>
          </li>
        </ul>
      </Box>
      {openEdit && (
        <PopUp handleClose={toggleOpenEdit} id={id} title={title} body={body} />
      )}
    </>
  );
}
