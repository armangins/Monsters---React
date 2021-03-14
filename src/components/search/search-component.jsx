import React from "react";
import "../search/search.css";

export const Search = ({placeholder,changeHandler}) => {
  return (
    <input
      className="search"
      onChange={changeHandler}
      placeholder={placeholder}
      type="text"
    />
  );
};
