import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initComment } from "../../interfaces/commentInterface";
import axios from "axios";

const initialState: initComment = {
  comments: [],
  status: "null",
};

export const fetchPostComments = createAsyncThunk(
  "comments/fetchComments",
  async (postId: string) => {
    const data = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    return data;
  }
);

const commentsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPostComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostComments.fulfilled, (state, action) => {
        state.comments = action.payload.data;
        state.status = "success";
      })
      .addCase(fetchPostComments.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const commentReducer = commentsSlice.reducer;
