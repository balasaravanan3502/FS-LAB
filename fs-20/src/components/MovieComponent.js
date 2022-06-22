import React from "react";
import Axios from "axios";

import "./MovieComponent.css";
import "../App.css";

const API_KEY = "API_KEY";

const MovieComponent = (props) => {
  const { movie } = props;

  const getVideo = async (searchString) => {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`
    );
    window.open(
      `https://www.youtube.com/watch?v=${response.data.results[0].key}`
    );
  };

  return (
    <div className="movie__card_container" onClick={getVideo}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.title}
        className="movie__card_img"
      />
      <div className="movie__card_name">{movie.title}</div>
    </div>
  );
};
export default MovieComponent;
