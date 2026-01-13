import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    showGpt: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGptSearch } = gptSlice.actions;

export default gptSlice.reducer;
