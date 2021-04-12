import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const style = {
  border: "1px solid black",
  padding: "15px",
  borderCollapse: "collapse",
};
const MovieList = () => {
  const [movies, setmovies] = useContext(MovieContext);

  return (
    <table style={{...style, width:'80%'}}>
      <tr>
        <th style={style}>Name</th>
        <th style={style}>Price</th>
      </tr>
      {movies.map((movie, index) => {
        return (
          <Movie
            style={style}
            name={movie.name}
            price={movie.price}
            key={movie.id}
          />
        );
      })}
    </table>
  );
};

export default MovieList;
