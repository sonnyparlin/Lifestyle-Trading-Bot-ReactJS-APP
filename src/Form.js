// client/src/App.js
import React from "react";
import "./App.css";

export default function Form(props) {
    return (
        <form>
        <p>Enter numbers without commas (,) or dollar signs ($). Yearly Pocket is how much you plan to take out of your fund each year, it defaults to 25% (0.25), any number between 0 and 1 is acceptable (for 30% you would enter 0.30). Check out the Lifestyle Trading Bot bot <a href="https://t.me/LifeStyleTrading_Bot?start=1wgcys1037">here</a>.</p> <p><strong>Your first request may take a few seconds while back-end servers spin up.</strong></p>
        
        <div className="formFields">
        <label>
          Investment (USD):
        </label>
        <input className="investment" placeholder="1000" defaultValue={props.investment} type="text" id="investment" name="investment" /><br/>
        <label>
          Years (USD):
        </label>
          <input className="years" defaultValue={props.years} type="text" id="years" name="years" /><br/>
        
        <label>
          Yearly Pocket:
        </label>
          <input className="pocket" defaultValue={props.pocket} type="text" id="pocket" placeholder="0.25" name="pocket" />
        </div>
          
        <button onClick={props.handleClick}>Submit</button>
      </form>
    )
}
