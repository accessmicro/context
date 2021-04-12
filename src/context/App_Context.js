import React from "react";
import MovieList from "./MovieList";
import { MovieProvider } from "./MovieContext";
import Nav from "./Nav";
import AddMovie from "./AddMovie";

function App_Context() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App_Context;
