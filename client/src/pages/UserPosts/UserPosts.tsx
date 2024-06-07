import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchUserPosts } from "../../redux/reducers/postReducer";
import { Box, Button } from "@mui/material";
import PostView from "../../components/PostView/PostView";
import styles from "./UserPosts.module.scss";
import PopUp from "../../components/PopUp/PopUp";

export default function UserPosts() {
  const userId = useParams();
  const dispatch = useAppDispatch();
  const userPosts = useAppSelector((state) => state.posts.posts);

  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    dispatch(fetchUserPosts(userId.id || ""));
  }, [dispatch, userId]);
  return (
    <>
      <Box>
        <Box className={styles.btnBox}>
          <Button variant="contained" onClick={toggleOpen}>
            Create new post
          </Button>
        </Box>
        {userPosts.map((post) => (
          <PostView
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </Box>
      {open && <PopUp handleClose={toggleOpen} id={0} title={""} body={""} />}
    </>
  );
}
