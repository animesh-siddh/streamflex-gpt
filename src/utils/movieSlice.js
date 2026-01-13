import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    playingMovies: null,
    videoTrailer : null,
    trendingMovies:null,
    popularMovies:null,
    topRatedMovies:null,
    horroMovies:null
  },
  reducers: {
    addMovies: (state, action) => {
      state.playingMovies = action.payload;
    },
    addVideoTrailer:(state,action)=>{
        state.videoTrailer = action.payload
    },
    tendingMovies:(state,action)=>{
      state.trendingMovies = action.payload
    },
    upcomingMovies:(state,action)=>{
      state.upcomingMovies = action.payload
    },
    popularMovies:(state,action)=>{
      state.popularMovies = action.payload
    },
      topRatedMovies:(state,action)=>{
      state.topRatedMovies = action.payload
    },
      horroMovies:(state,action)=>{
      state.horroMovies = action.payload
    },
    
    
    
  },
});

export const { addMovies ,addVideoTrailer,tendingMovies,upcomingMovies,popularMovies,topRatedMovies,horroMovies} = movieSlice.actions;

export default movieSlice.reducer;
