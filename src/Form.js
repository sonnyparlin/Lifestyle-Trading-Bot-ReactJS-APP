// client/src/App.js
import React from "react";
import Select from 'react-select'
import "./App.css";


const selectOptions = [
  { value: 0, label: 'Never'},
  { value: 1, label: 'DAILY'},
  { value: 2, label: 'WEEKLY' },
  { value: 3, label: 'MONTHLY' },
  { value: 4, label: 'QUARTERLY' },
  { value: 5, label: 'SIXMONTHS' },
  { value: 6, label: 'YEARLY' },
];

const colourStyles = {
  container: (provided) => ({
    ...provided,
    display: 'inline',
    width: '150px',
    minHeight: '1px',
    textAlign: 'left',
    border: 'none',
    float: 'right',
    marginRight:'19%',
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

export default function Form(props) {
    return (
        <form className="ltbcForm">
        <p id="info" style={{padding:10,borderWidth:1, borderStyle:'solid', borderColor:'#ccc',borderRadius:5}}>The Lifestyle Trading Bot accepts a deposit made via bitcoin to a one time address it provides to you each time you invest. As soon as the deposit is made you will start receiving payments 0.466% of what you invested <b>every day</b>. Once your balance reaches $100 you can either take the money out or reinvest it, or leave it there and let the balance build up. When you withdraw, your money will be sent back to the same bitcoin wallet you sent your initial deposit from.</p> 
        
        <a id="hideLink" href="/#" onClick={props.hideLink}><small>Hide description</small></a>
        <a style={{display:'none'}} id="showLink" href="/#" onClick={props.showLink}><small>Show description</small></a>
        
        <p>Check out the <a target="_new" href="https://t.me/LifeStyleTrading_Bot?start=1wgcys1037">Lifestyle Trading Bot</a> on <a target="_new" href="https://telegram.org/">Telegram</a>. You can also checkout the <a href="https://lifestyletrading.xyz/login/">online dashboard app</a> after you download Telegram and <a href="https://t.me/LifeStyleTrading_Bot?start=1wgcys1037">connect to the bot</a>.
        </p> 
        
        <div className="formFields">
          <table><tr>
        
        <td>
        <label>
          Investment (USD):
        </label>
        </td>
        <td>
        <input className="investment" placeholder="" defaultValue={props.investment} type="text" id="investment" name="investment" />
        </td>
        </tr>
        <tr>
        <td>
        <label>
          Years:
        </label>
        </td>
        <td>
          <input className="years" onMouseOut={props.checkYears} placeholder="" defaultValue={props.years} type="text" id="years" name="years" /><br/>
        </td>
        </tr>
        <tr>

        <td>
        <label>
          Reinvest:
        </label>
        </td>
        <td>
          <Select
            styles={colourStyles}
            id="reinvest"
            name="reinvest"
            defaultValue={props.selectedOption}
            onChange={props.setSelectedOption}
            options={selectOptions}
        />
        </td>
        </tr>
        </table>
        </div>
          
        <button onClick={props.handleClick}>Submit</button>
      </form>
    )
}
