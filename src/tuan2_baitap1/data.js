import React from "react";

export let randomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export const MyContext = React.createContext([randomColor,'screen']);
