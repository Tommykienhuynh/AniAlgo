import React, { useEffect, useState } from "react";
import "./Graph.css";

function Graph({ arr }) {
 

  return (
    <div className="graphContainer">
      {arr.map((value, idx) => (
        <div
          className="graphBar"
          key={idx}
          style={{ height: `${value * 4}px` }}
        >
          {value <= 5 ? <div className="graphNumTop"> {value} </div> : value}
        </div>
      ))}
    </div>
  );
}

export default Graph;
