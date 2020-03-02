import React from "react";
import "./CowTiles.css";

function CowTiles({ cow }) {
  return (
    <div className="cow-tile">
      <p>{cow.cow_name}</p>
    </div>
  );
}

export default CowTiles;
