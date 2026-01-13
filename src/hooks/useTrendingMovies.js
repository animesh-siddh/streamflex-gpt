import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { tendingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const movieapi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPTION
    );

    const json = await data.json();

    dispatch(tendingMovies(json.results));
  };

  useEffect(() => {
    movieapi();
  }, []);
};

export default useTrendingMovies;
