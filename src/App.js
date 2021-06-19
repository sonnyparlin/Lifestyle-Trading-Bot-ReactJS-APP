// client/src/App.js
import ReactJson from 'react-json-view';
import React, {useState, useEffect} from "react";
import Form from "./Form"
import "./App.css";

export default function App() {

  const [investment, setInvestment] = useState('1000');
  const [years, setYears] = useState('10');
  const [pocket, setPocket] = useState('0.25');
  const [strategy, setStrategy] = useState({});

  let url = 'https://ltbc.herokuapp.com/api?'
  url += `investment=${investment}&years=${years}&yearlypocket=${pocket}`

  useEffect(() => {
    if (investment) {
      fetch(url).then(response => response.json())
        .then(data => setStrategy({strategy: JSON.parse(data)}));
    }
  });

  const handleClick = (e) => {
    setStrategy({})
    e.preventDefault();
    setInvestment(document.getElementById('investment').value)
    setYears(document.getElementById('years').value)
    setPocket(document.getElementById('pocket').value)
  }

  if('strategy' in strategy) {
    return (
      <div className="App">
        <h1>Lifestyle Trading Bot Strategy</h1>
        <Form investment={investment}
            years={years}
            pocket={pocket} 
          onClick={handleClick} />
        <ReactJson src={strategy} />
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Lifestyle Trading Bot Strategy</h1>
      <Form investment={investment}
            years={years}
            pocket={pocket} 
          onClick={handleClick} />
      Loading...
    </div>
  )
}