import React from "react";
import "./nav.css";

export default function nav() {
  return (
    <nav>
      <div className="titleContainer">
        <h1 className="titlePink"> Ani </h1>
        <h1 className="titleBlue"> Algo</h1>
      </div>

      <select className="algoPicker">
        <option> Bubble Sort </option>
        <option> Merge Sort </option>
      </select>
    </nav>
  );
}
