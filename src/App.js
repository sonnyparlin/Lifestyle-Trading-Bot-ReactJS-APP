// client/src/App.js
import ReactJson from 'react-json-view';
import React, {useState, useEffect} from "react";
import Form from "./Form"
import "./App.css";

export default function App() {

  const [investment, setInvestment] = useState('');
  const [years, setYears] = useState('');
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
    e.preventDefault();
    setStrategy({})
    let invest = document.getElementById('investment').value
    let yrs = document.getElementById('years').value
    let pckt = parseFloat(document.getElementById('pocket').value)
    
    if (!invest || !yrs) {
      alert("Please enter a valid investment amount and the number of years you want to invest")
      return;
    }

    setInvestment(invest)
    setYears(yrs)
    setPocket(pckt)
  }

  const Greeting = (props) => {
    return  <h1>Lifestyle Trading Bot Strategy</h1>
  }

  const DataResponse = (props) => {
    let loader = investment ? "Loading..." : ""

    if ('strategy' in strategy) {
      return <ReactJson src={strategy} />
    } else {
      return loader
    }
  }
    
  return (
    <div className="App">
      <Greeting />
      <Form investment={investment} 
            years={years} 
            pocket={pocket} 
            handleClick={handleClick} />
      <DataResponse />
    </div>
  )
}