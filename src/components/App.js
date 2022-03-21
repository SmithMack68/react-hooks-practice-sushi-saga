import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [budget, setBudget] = useState(100)
  
  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => {
      const allSushis = sushis.map(sushi => {
        return {...sushi, eaten: false}
      })
      setSushis(allSushis)
    })
  }, [])

 
  const handleEatSushi = (eatenSushi) => {
    if (budget >= eatenSushi.price) {
    const allSushis = sushis.map(sushi => sushi.id === eatenSushi.id  ? {...sushi, eaten: true} : sushi)
     setSushis(allSushis) 
     setBudget(budget => budget - eatenSushi.price)
  } else {
    alert("Need more 💰💰💰") 
  }
}
  const eatenSushis = sushis.filter(s => sushis.eaten)
 

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushi={handleEatSushi} />
      <Table  budget={budget} plates={eatenSushis}/>
    </div>
  );
}

export default App;
