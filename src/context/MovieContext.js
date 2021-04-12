import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setmovies] = useState([
    {
      name: "Harry Poster",
      price: "$10",
      id: 1,
    },
    {
      name: "Game of Thrones",
      price: "$26",
      id: 2,
    },
    {
      name: "Hai dua tre",
      price: "$1505",
      id: 3,
    },
  ]);
  console.log(movies);
  return (
    <MovieContext.Provider value={[movies, setmovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
