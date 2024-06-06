import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchUserPosts } from "../../redux/reducers/postReducer";
import { Box } from "@mui/material";
import PostView from "../../components/PostView/PostView";

export default function UserPosts() {
  const userId = useParams();
  const dispatch = useAppDispatch();
  const userPosts = useAppSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchUserPosts(userId.id || ""));
  }, [dispatch, userId]);
  return (
    <Box>
      {userPosts.map((post) => (
        <PostView
          userId={post.userId}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </Box>
  );
}
