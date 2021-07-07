// client/src/App.js
//import ReactJson from 'react-json-view';
import React, {useState, useEffect} from "react";
import Form from "./Form"
import Calculator from "./Calculator"
import "./App.css";

export default function App() {
  
  const [investment, setInvestment] = useState('');
  const [years, setYears] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [strategy, setStrategy] = useState({});

  useEffect(() => {
    if (!investment) return;
    setStrategy(JSON.parse(Calculator(investment, years, selectedOption)))
  }, [investment, years, selectedOption]);

  function handleClick(e) {
    e.preventDefault();
    let invest = document.getElementById('investment') ? document.getElementById('investment').value : ""    
    let yrs = document.getElementById('years') ? document.getElementById('years').value : ""
    if (!selectedOption)
      setSelectedOption("Never")

    if (!invest || !yrs) {
      alert("Please enter a valid investment amount and the number of years you want to invest")
      return;
    } 

    setInvestment(invest)
    setYears(parseInt(yrs))
  }

  function checkYears() {
    let i = document.getElementById('years') ? document.getElementById('years').value : ""
    document.getElementById('years').value = parseInt(i)
  }

  const Greeting = () => {
    return  <h1>Lifestyle Trading Bot Calculator</h1>
  }

  const DataResponse = () => {
    if (strategy.hasOwnProperty('investment')) {
      //return <ReactJson src={strategy} />
      return (
        <>
        <h4>Initial investment: <span style={{color:'red'}}>${strategy.investment}</span></h4>
        <p>Strategy: {strategy.strategy}</p>
        {strategy.balance > 0 ? <p>Balance: {strategy.balance}</p> : ""}
        <p>{strategy.message}</p>
        <h4>Net profit: <span style={{color:'green'}}>{strategy.profit}</span></h4>
        </>
      )
    } else
      return ""
  }
    
  return (
    <div className="App">
      <Greeting />
      <Form investment={investment}
            setSelectedOption={setSelectedOption}
            years={years} 
            checkYears={checkYears}
            handleClick={handleClick} />
      <DataResponse />
    </div>
  )
}
