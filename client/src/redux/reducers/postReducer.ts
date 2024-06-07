import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../interfaces/postInterfaces";
import axios from "axios";

interface initPosts {
  posts: Post[];
  status: string;
}

const initialState: initPosts = {
  posts: [],
  status: "null",
};

export const fetchUserPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (userId: string) => {
    const data = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    return data;
  }
);

export const pushPost = createAsyncThunk(
  "posts/pushPost",
  async (post: Post) => {
    console.log(post);
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      post
    );
    return response;
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserPosts.fulfilled, (state, action) => {
        state.posts = action.payload.data;
        state.status = "success";
      })
      .addCase(fetchUserPosts.rejected, (state) => {
        state.status = "error";
      })
      .addCase(pushPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(pushPost.fulfilled, (state, action) => {
        state.status = "success";
        state.posts = state.posts.concat(action.payload.data);
      })
      .addCase(pushPost.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const postReducer = postSlice.reducer;
