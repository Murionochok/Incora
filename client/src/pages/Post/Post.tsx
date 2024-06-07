import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Box, Grid } from "@mui/material";

import styles from "./Post.module.scss";
import { useEffect } from "react";
import { fetchPostComments } from "../../redux/reducers/commentsReducer";
import CommentView from "../../components/CommentView/CommentView";

export default function Post() {
  const { uid, pid } = useParams();
  const user = useAppSelector((state) => state.users.users).filter(
    (user) => user.id === Number(uid)
  )[0];
  const post = useAppSelector((state) => state.posts.posts).filter(
    (post) => post.id === Number(pid)
  )[0];

  const comments = useAppSelector((state) => state.comments.comments);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostComments(pid || ""));
  }, [dispatch, pid]);
  return (
    <>
      <Box>
        <h1 className={styles.title}>{post.title}</h1>
      </Box>
      <Grid container className={styles.post}>
        <Grid className={styles.header} container>
          <Grid className={styles.user} item xs={12}>
            <Box className={styles.imageBox}>
              <img src="/man-user.svg" alt="user-icon" />
            </Box>
            <Box className={styles.userData}>
              <h1>{user.name}</h1>
              <h3> {user.email}</h3>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Box className={styles.body}>
        <p>{post.body}</p>
      </Box>
      <Box>
        <Box className={styles.commentTitle}>
          <h1>Comments</h1>
        </Box>
        {comments.map((comment) => (
          <CommentView
            postId={comment.postId}
            id={comment.id}
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        ))}
      </Box>
    </>
  );
}
