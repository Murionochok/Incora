import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./reducers/userReducer";
import { postReducer } from "./reducers/postReducer";
import { commentReducer } from "./reducers/commentsReducer";

export const store = configureStore({
  reducer: {
    users: userReducer,
    posts: postReducer,
    comments: commentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
