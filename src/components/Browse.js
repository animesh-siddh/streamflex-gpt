import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";
import GptSearch from "./GptSearchContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useHorrorMovies();
  const { showGptSearch } = useSelector((state) => state.gpt);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />{" "}
        </>
      )}
    </div>
  );
};

export default Browse;
