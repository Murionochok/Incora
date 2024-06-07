import { Box, Button, TextField } from "@mui/material";

import styles from "./PopUp.module.scss";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { editPost, pushPost } from "../../redux/reducers/postReducer";
import { useParams } from "react-router-dom";
import { PopUpInterface } from "../../interfaces/postInterfaces";

export default function PopUp({
  handleClose,
  id,
  title,
  body,
}: PopUpInterface) {
  const userId = useParams();
  const [titleState, setTitleState] = useState(title);
  const [descriptionState, setDescriptionState] = useState(body);

  const updateTitleField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleState(event.target.value);
    event.preventDefault();
  };

  const updateDescriptionField = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescriptionState(event.target.value);
    event.preventDefault();
  };

  const request = id == 0 ? "Create" : "Edit";

  const dispatch = useAppDispatch();

  const submit = () => {
    switch (request) {
      case "Edit":
        console.log("edit");
        dispatch(
          editPost({
            userId: Number(userId.id || "0"),
            id: id,
            title: titleState,
            body: descriptionState,
          })
        );
        break;
      case "Create":
        dispatch(
          pushPost({
            userId: Number(userId.id || "0"),
            id: Date.now(),
            title: titleState,
            body: descriptionState,
          })
        );
        break;
    }
    handleClose();
  };
  return (
    <Box className={styles.popUp}>
      <Box className={styles.body}>
        <Box>
          <Button onClick={handleClose}>X</Button>
        </Box>
        <form className={styles.data}>
          <h1>{request} post</h1>
          <TextField
            required
            label="Title"
            value={titleState}
            onChange={updateTitleField}
          />
          <TextField
            required
            label="Description"
            multiline
            minRows={7}
            value={descriptionState}
            onChange={updateDescriptionField}
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
