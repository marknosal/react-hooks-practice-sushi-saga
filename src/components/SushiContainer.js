import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onEatSushi }) {
  const [sushiIndex, setSushiIndex] = useState(0)

  const shownSushis = sushis
    .slice(sushiIndex, sushiIndex + 4)
    .map(sushi => {
      return (
        <Sushi name={sushi.name} key={sushi.created_at} sushi={sushi} onEatSushi={onEatSushi} />
      )
    })

  function handleMoreClick() {
    setSushiIndex(sushiIndex => (sushiIndex + 4) % sushis.length)
  }


  return (
    <div className="belt">
      {shownSushis}
      <MoreButton onMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
