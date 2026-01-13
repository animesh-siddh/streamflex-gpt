import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const { playingMovies, trendingMovies ,upcomingMovies,popularMovies,topRatedMovies,horroMovies} = useSelector((state) => state.movie);

  return (
    <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
      {playingMovies && 
      
          <MovieList title={"Now Playing"} movies={playingMovies} />
        
      }
      {trendingMovies && 
          <MovieList title={"Trending"} movies={trendingMovies} />
      }
       {upcomingMovies && 
          <MovieList title={"Upcoming"} movies={upcomingMovies} />
      }
        {popularMovies && 
          <MovieList title={"Popular"} movies={popularMovies} />
      }
        {topRatedMovies && 
          <MovieList title={"Top Rated"} movies={topRatedMovies} />
      }
       {horroMovies && 
          <MovieList title={"Horror"} movies={horroMovies} />
      }
    </div>
    </div>
  );
};

export default SecondaryContainer;


  {/* <MovieList title={"Trending"} movies={playingMovies} /> */}

          {/* <MovieList title={"Popular"} movies={movies.popularMovies} /> */}
          {/* <MovieList title={"Upcoming Movies"} movies={playingMovies} />
          <MovieList title={"Horror"} movies={playingMovies} /> */}