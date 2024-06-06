import { Box, Button, TextField } from "@mui/material";

import styles from "./PopUp.module.scss";
import { useRef } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { pushPost } from "../../redux/reducers/postReducer";
import { useParams } from "react-router-dom";

export default function PopUp({ handleClose }: () => void) {
  const userId = useParams();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const dispatch = useAppDispatch();

  const submit = () => {
    dispatch(
      pushPost({
        userId: Number(userId.id || "0"),
        id: Date.now(),
        title: (titleRef.current as unknown as HTMLInputElement).value,
        body: (titleRef.current as unknown as HTMLInputElement).value,
      })
    );
  };
  return (
    <Box className={styles.popUp}>
      <Box className={styles.body}>
        <Box>
          <Button onClick={handleClose}>X</Button>
        </Box>
        <form className={styles.data}>
          <h1>Create new post</h1>
          <TextField required label="Title" ref={titleRef} />
          <TextField
            required
            label="Description"
            multiline
            minRows={7}
            ref={descriptionRef}
          />
          <Box className={styles.submitBtn}>
            <Button variant="contained" type="submit" onClick={submit}>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
