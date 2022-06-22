import React, { useState, useEffect } from "react";
import Axios from "axios";
import MovieComponent from "./components/MovieComponent";

export const API_KEY = "API_KEY";

function App() {
  const [movieList, updateMovieList] = useState([]);

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    updateMovieList(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app__container">
      <div className="app__header">
        <div className="app__name">Popular Movies </div>
      </div>

      <div className="app__movielist">
        {movieList?.length
          ? movieList.map((movie, index) => (
              <MovieComponent key={index} movie={movie} />
            ))
          : null}
      </div>
    </div>
  );
}

export default App;
