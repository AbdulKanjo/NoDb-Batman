import React from "react";
import "./buttons.css";

export default function Button(props) {
  console.log(props);
  return (
    <div>
      <button className="button" onClick={() => props.handleClick(props.id)}>
        favorite
      </button>
      <button className="button" onClick={() => props.handleDelete(props.id)}>
        delete
      </button>
      <button
        className="button"
        onClick={() => props.handleIncrement(props.id)}
      >
        +
      </button>
      <button
        className="button"
        onClick={() => props.handleDecrement(props.id)}
      >
        -
      </button>
    </div>
  );
}
