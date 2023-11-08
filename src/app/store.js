import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "../features/useinfo/userInfoSlice";
import postListInsertSlice from "../features/postListSlice/postListInsertSlice";

export const store = configureStore({
  reducer: {
    userInfo: userInfoSlice,
    postList: postListInsertSlice
  }
});