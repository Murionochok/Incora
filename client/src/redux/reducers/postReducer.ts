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
    const data = axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    return data;
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
      })
      .addCase(fetchUserPosts.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const postReducer = postSlice.reducer;
