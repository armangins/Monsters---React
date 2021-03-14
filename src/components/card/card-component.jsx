import React from "react";
import "./card.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <h1>{props.user.name}</h1>
      <img src={`https://robohash.org/${props.user.id}`} alt="user"/>
      <p>{ props.user.email }</p>
    </div>
  );
};
