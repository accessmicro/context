import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
import "./css/AddMovie.css";
const AddMovie = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [id, setid] = useState(4);
  const updateName = (e) => {
    setname(e.target.value);
  };
  const updatePrice = (e) => {
    setprice(e.target.value);
  };

  //   const clearInput = () => {
  //     Array.from(document.querySelectorAll("input")).forEach((ele) => {
  //       setname("");
  //       setprice("");
  //     });
  //   };

  const [movies, setmovies] = useContext(MovieContext);
  let addMovie = (e) => {
    e.preventDefault();

    if (name != "" && price != "") {
      setid(id + 1);
      console.log(id);
      setmovies((preMovies) => [
        ...preMovies,
        { name: name, price: price, id: id },
      ]);
    } else{
      alert('Nhap di!')
    }

    Array.from(document.querySelectorAll("input")).forEach((ele) => {
      setname("");
      setprice("");
    });
  };

  return (
    <form action="" onSubmit={addMovie} className="form">
      <label htmlFor="name">
        <span>Name:</span>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={updateName}
        />
      </label>
      <label htmlFor="price">
        <span>Price: </span>
        <input
          id="price"
          type="text"
          name="price"
          value={price}
          onChange={updatePrice}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddMovie;
