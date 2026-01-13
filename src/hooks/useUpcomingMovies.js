
import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import {  upcomingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const movieapi = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTION);

    const json = await data.json();

    dispatch(upcomingMovies(json.results));
  };

  useEffect(() => {
    movieapi();
  }, []);
};

export default useUpcomingMovies;
