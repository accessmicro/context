import React from "react";
const Movie = ({ name, price, style }) => {
  return (
    <tr style={style}>
      <td style={style}>{name}</td>
      <td style={style}>{price}</td>
    </tr>
  );
};

export default Movie;