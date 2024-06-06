import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces/userInterfaces";
import axios from "axios";

interface initUser {
  users: User[];
  status: string;
}

const initialState: initUser = {
  users: [],
  status: "null",
};

const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const data = axios.get("https://jsonplaceholder.typicode.com/users");
  return data;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload.data;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const userReducer = userSlice.reducer;
