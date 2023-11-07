import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "../features/useinfo/userInfoSlice";

export const store = configureStore({
  reducer: {
    userInfo: userInfoSlice,
  }
});