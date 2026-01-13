import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import movie from "./movieSlice"
import gpt from "./gptSlice"
import config from "./configSlice"

const appStore = configureStore({
  reducer: {
    user,
    movie,
    gpt,
    config
  },
});

export default appStore;
