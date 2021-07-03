// client/src/App.js
import React from "react";
//import Select from 'react-select'
import "./App.css";

/*
const selectOptions = [
  { value: '1', label: 'Every Day'},
  { value: '7', label: 'Every Week' },
  { value: '30', label: 'Every Month' },
  { value: '91', label: 'Every Quarter' },
  { value: '182', label: 'Every Six Months' },
];

const colourStyles = {
  container: (provided) => ({
    ...provided,
    display: 'inline-block',
    width: '200px',
    minHeight: '1px',
    textAlign: 'left',
    border: 'none',
    float: 'right',
    marginRight:'170px',
  }),
  control: (provided) => ({
    ...provided,
    border: '1px solid #888',
    borderRadius: '4px',
    minHeight: '1px',
    height: '30px',
  }),
  input: (provided) => ({
    ...provided,
    minHeight: '1px',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    minHeight: '1px',
    paddingTop: '0',
    paddingBottom: '0',
    color: '#757575',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    minHeight: '1px',
    height: '12px',
  }),
  clearIndicator: (provided) => ({
    ...provided,
    minHeight: '1px',
  }),
  valueContainer: (provided) => ({
    ...provided,
    minHeight: '1px',
    height: '30px',
    paddingTop: '0',
    paddingBottom: '0',
  }),
  singleValue: (provided) => ({
    ...provided,
    minHeight: '1px',
    paddingBottom: '0px',
    paddingTop: '4px'
  }),
};
*/
export default function Form(props) {
    return (
        <form className="ltbcForm">
        <p>Enter numbers without commas (,) or dollar signs ($). Yearly Pocket 
          is how much you plan to take out of your fund each year, it defaults 
          to 25% (0.25), any number between 0 and 1 is acceptable (for 30% you 
          would enter 0.30).</p> <p>Check out the <a target="_new" href="https://t.me/LifeStyleTrading_Bot?start=1wgcys1037">Lifestyle Trading Bot</a> on <a target="_new" href="https://telegram.org/">Telegram</a>.</p> 
        
        <div className="formFields">
        <label>
          Investment (USD):
        </label>
        <input className="investment" placeholder="1000" defaultValue={props.investment} type="text" id="investment" name="investment" /><br/>
        <label>
          Years (USD):
        </label>
          <input className="years" placeholder="10" defaultValue={props.years} type="text" id="years" name="years" /><br/>
        
        <label>
          Yearly Pocket:
        </label>
          <input className="pocket" defaultValue={props.pocket} type="text" id="pocket" placeholder="0.25" name="pocket" /><br/>
        
        {/*
        <label>
          Reinvest:
        </label>
          <Select
            styles={colourStyles}
            id="reinvest"
            name="reinvest"
            defaultValue={props.selectedOption}
            onChange={props.setSelectedOption}
            options={selectOptions}
        /> */}
        </div>
          
        <button onClick={props.handleClick}>Submit</button>
      </form>
    )
}
