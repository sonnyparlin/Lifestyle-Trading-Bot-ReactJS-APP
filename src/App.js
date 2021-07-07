// client/src/App.js
//import ReactJson from 'react-json-view';
import React, {useState, useEffect} from "react";
import { createPopper } from '@popperjs/core';
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

  function toggleBTC() {
    let info = document.querySelector('.btc') // Using a class instead, see note below.
    let btn = document.querySelector('#button') // Using a class instead, see note below.

    let btcState = info.style.display
    switch(btcState) {
      case 'none':
        info.style.display='inline';
        info.style.paddingRight='5px';
        btn.style.display='inline'
        break;
      case 'block':
        btn.style.display='none'
        info.style.display='none'
        break;
      default:
        btn.style.display='none'
        info.style.display='none'
        break;
    }
  }

  function copyToClipboard(elementId) {
    let tip = document.querySelector('#tooltip') // Using a class instead, see note below.
    let btn = document.querySelector('#button') // Using a class instead, see note below.

    // Create an auxiliary hidden input
    var aux = document.createElement("input");
    // Get the text from the element passed into the input
    aux.setAttribute("value", document.querySelector('.btc').innerHTML);
    // Append the aux input to the body
    document.body.appendChild(aux);
    // Highlight the content
    aux.select();
    // Execute the copy command
    document.execCommand("copy");
    // Remove the input from the body
    document.body.removeChild(aux);
    const button = document.querySelector('#button');
    const tooltip = document.querySelector('#tooltip');

    tip.style.display='inline'

    setTimeout(()=>{
      tip.style.display='none'
    }, 2000)
    setTimeout(() => {
      toggleBTC();
      btn.style.display='none'
    }, 2000)
    // Pass the button, the tooltip, and some options, and Popper will do the
    // magic positioning for you:
    createPopper(button, tooltip, {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
  }
  

  function hideLink(e) {
    let info=document.querySelector('.info')
    info.style.display="none"
    document.getElementById('showLink').style.display="block"
  }

  function showLink(e) {
    let info=document.querySelector('.info')
    info.style.display="block"
    document.getElementById('showLink').style.display="none"
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
  
      setTimeout(() => {
      window.scroll({
        top: document.body.offsetHeight,
        left: 0, 
        behavior: 'smooth',
      });
    }, 300);
  
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
            copyToClipboard={copyToClipboard}
            toggleBTC={toggleBTC}
            hideLink={hideLink}
            showLink={showLink}
            checkYears={checkYears}
            handleClick={handleClick} />
      <DataResponse />
    </div>
  )
}
