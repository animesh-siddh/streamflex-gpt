import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { popularMovies, tendingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const movieapi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTION
    );

    const json = await data.json();

    dispatch(popularMovies(json.results));
  };

  useEffect(() => {
    movieapi();
  }, []);
};

export default usePopularMovies;
