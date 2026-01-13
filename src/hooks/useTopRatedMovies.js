import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { topRatedMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const movieapi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTION
    );

    const json = await data.json();

    dispatch(topRatedMovies(json.results));
  };

  useEffect(() => {
    movieapi();
  }, []);
};

export default useTopRatedMovies;
