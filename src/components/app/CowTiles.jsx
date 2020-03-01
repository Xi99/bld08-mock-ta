import React from "react";
import "./CowTiles.css";

function CowTiles({ cows }) {
  return (
    <div className="cow-tile">
      <p>
        {cows.map(cow => {
          return cow.cow_name;
        })}
      </p>
    </div>
  );
}

export default CowTiles;
