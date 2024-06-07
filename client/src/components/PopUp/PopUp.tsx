import { Box, Button, TextField } from "@mui/material";

import styles from "./PopUp.module.scss";
import { useRef } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { pushPost } from "../../redux/reducers/postReducer";
import { useParams } from "react-router-dom";
import { PopUpHandleClose } from "../../interfaces/postInterfaces";

export default function PopUp({ handleClose }: PopUpHandleClose) {
  const userId = useParams();
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const submit = () => {
    dispatch(
      pushPost({
        userId: Number(userId.id || "0"),
        id: Date.now(),
        title: (titleRef.current as unknown as HTMLInputElement).value,
        body: (descriptionRef.current as unknown as HTMLInputElement).value,
      })
    );
    handleClose();
  };
  return (
    <Box className={styles.popUp}>
      <Box className={styles.body}>
        <Box>
          <Button onClick={handleClose}>X</Button>
        </Box>
        <form className={styles.data}>
          <h1>Create new post</h1>
          <TextField required label="Title" inputRef={titleRef} />
          <TextField
            required
            label="Description"
            multiline
            minRows={7}
            inputRef={descriptionRef}
          />
          <Box className={styles.submitBtn}>
            <Button variant="contained" onClick={submit}>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
