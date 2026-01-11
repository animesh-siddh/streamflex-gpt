import { useEffect } from "react";
import { API_OPTION, movieUrl } from "../utils/constants";
import { addMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const movieapi = async () => {
    const data = await fetch(movieUrl, API_OPTION);

    const json = await data.json();

    dispatch(addMovies(json.results));
  };

  useEffect(() => {
    movieapi();
  }, []);
};

export default useNowPlayingMovies;
