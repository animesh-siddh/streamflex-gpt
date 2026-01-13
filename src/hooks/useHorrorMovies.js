import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { horroMovies, topRatedMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useHorrorMovies = () => {
  const dispatch = useDispatch();

  const movieapi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=27",
      API_OPTION
    );

    const json = await data.json();

    dispatch(horroMovies(json.results));
  };

  useEffect(() => {
    movieapi();
  }, []);
};

export default useHorrorMovies;
