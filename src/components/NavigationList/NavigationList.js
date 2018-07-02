import React from "react";
// import "./ListOfMovies.css";

export default function Header(props) {
  return (
    <div className="nav">
      <div onClick={() => props.home()}>Home</div>
      <img
        className="header-pic"
        src="https://vignette.wikia.nocookie.net/logopedia/images/4/43/Batman_begins_symbol.svg/revision/latest?cb=20170909070225"
        width="300"
        height="100"
      />
      <div className="favs" onClick={props.Favorites}>
        Favorites
      </div>
    </div>
  );
}
