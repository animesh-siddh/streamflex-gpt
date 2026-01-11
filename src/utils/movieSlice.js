import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    playingMovies: null,
    videoTrailer : null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.playingMovies = action.payload;
    },
    addVideoTrailer:(state,action)=>{
        state.videoTrailer = action.payload
    }
  },
});

export const { addMovies ,addVideoTrailer} = movieSlice.actions;

export default movieSlice.reducer;
