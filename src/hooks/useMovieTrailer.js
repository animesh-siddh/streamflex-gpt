import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addVideoTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = () => {
  const dispatch = useDispatch();
  const moviedata = useSelector((state) => state.movie?.playingMovies);

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${moviedata?.[0]?.id}/videos?language=en-US`,
      API_OPTION
    );

    const json = await data.json();

    const filterData = json?.results?.filter(
      (video) => video.type === "Trailer"
    );

    const Trailer = filterData?.length ? filterData : json?.[0];

    dispatch(addVideoTrailer(Trailer));
  };

  useEffect(() => {
    if (moviedata) getMovieVideo();
  }, [moviedata]);
};

export default useMovieTrailer;
