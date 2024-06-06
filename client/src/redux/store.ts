import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export type RootState = typeof store.getState;

export type AppDispatch = typeof store.dispatch;
