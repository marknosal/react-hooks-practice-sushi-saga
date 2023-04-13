import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        const newData = data.map(sushi => ({...sushi, eaten : false}))
        setSushis(newData)})
  }, [])

  function handleEatSushi(sushi){

    if (wallet >= sushi.price) {
      setWallet(wallet => wallet - sushi.price)
      sushi.eaten = !sushi.eaten
    } else {
      alert('Too poor!')
    }
  }

  
  return (
    <div className="app">
      <SushiContainer sushis={sushis} test={API} onEatSushi={handleEatSushi} />
      <Table money={wallet} />
    </div>
  );
}

export default App;
