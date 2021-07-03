// client/src/App.js
import ReactJson from 'react-json-view';
import React, {useState, useEffect} from "react";
import Form from "./Form"
import Calculator from "./Calculator"
import "./App.css";

export default function App() {
  
  const [investment, setInvestment] = useState('');
  const [years, setYears] = useState('');
  //const [selectedOption, setSelectedOption] = useState(null);
  const [pocket, setPocket] = useState('0');
  const [strategy, setStrategy] = useState({});

  useEffect(() => {
    if (!investment) return;
    setStrategy(Calculator(investment, years, pocket, '6 months'))
  }, [investment, years, pocket]);

  function handleClick(e) {
    e.preventDefault();
    let invest = document.getElementById('investment') ? document.getElementById('investment').value : ""    
    let yrs = document.getElementById('years') ? document.getElementById('years').value : ""
    let pckt = document.getElementById('pocket') ? parseFloat(document.getElementById('pocket').value) : ""

    if (!invest || !yrs) {
      alert("Please enter a valid investment amount and the number of years you want to invest")
      return;
    } 

    setInvestment(invest)
    setYears(parseInt(yrs))
    setPocket(pckt)
  }

  function checkInterval() {
    let i = document.getElementById('pocket') ? document.getElementById('pocket').value : ""
  
    if (i >= 0.4) {
      document.getElementById('pocket').value = '0.4'
    }
  }

  const Greeting = (props) => {
    return  <h1>Lifestyle Trading Bot Strategy</h1>
  }

  const DataResponse = (props) => {
    let loader = investment ? "Loading..." : ""

    if (strategy && strategy.message && 'years' in strategy.message) {
      return <ReactJson src={strategy} />
    } else {
      return loader
    }
  }
    
  return (
    <div className="App">
      <Greeting />
      <Form investment={investment}
            //setSelectedOption={setSelectedOption}
            years={years} 
            pocket={pocket}
            checkInterval={checkInterval} 
            handleClick={handleClick} />
      <DataResponse />
    </div>
  )
}
