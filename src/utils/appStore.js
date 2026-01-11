import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import movie from "./movieSlice"

const appStore = configureStore({
  reducer: {
    user,
    movie
  },
});

export default appStore;
