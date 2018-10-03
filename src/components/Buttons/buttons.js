import React from "react";
import "./buttons.css";

export default function Button(props) {
  return (
    <div>
      <button className="button" onClick={() => props.handleClick(props.id)}>
        favorite
      </button>
      <div className="delete">
        <button className="button" onClick={() => props.handleDelete(props.id)}>
          delete
        </button>
      </div>
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
