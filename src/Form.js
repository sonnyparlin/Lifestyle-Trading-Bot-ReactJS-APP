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
        <p className="info" style={{padding:10,marginBottom:10,paddingBottom:0,borderWidth:1, borderStyle:'solid', borderColor:'#ccc',borderRadius:5}}><small>The <a target="_new" href="https://t.me/LifeStyleTrading_Bot?start=1wgcys1037">Lifestyle Trading Bot</a> is an investment program that uses Bitcoin as it's main currency for sending and receiving your money into and out of the program. The bot then uses your investment to buy and sell crypto, earning you 0.466% per day on your investment for 365 days. Essentially, it's a 365 day loan that pays you back daily. The real magic happens when you take your earnings and reinvest them essentially compounding the interest you earn daily. You make a deposit via Bitcoin to a one time address it provides you each time you click the deposit button (<i><small>do not use the same address twice</small></i>). As soon as the deposit is made you will earn your first payment 24 hours later. Once your balance reaches $100 you can either take the money out or reinvest it, or you can simply wait and collect. This app is not affiliated with the LTB program, I am just a fan and fellow investor. However, I'm happy to answer questions about the investment program via <a href="https://t.me/sonnygrapples">Telegram</a>. You can see what's happening under the hood by opening your browser's developer tools and clicking on the console while using the app. The source code is <a target="_new" href="https://github.com/sonnyparlin/Lifestyle-Trading-Bot-ReactJS-APP">available here</a>. If you find this calculator useful, please consider buying me a cup of coffee. I accept <a target="_new" href="https://www.paypal.com/biz/fund?id=U8TWRRPZYVQN8">PayPal</a>, <a target="_new" href="https://cash.app/$sonnyjitsu">CashApp</a>, <a target="_new" href="https://venmo.com/code?user_id=2385826935734272129">Venmo</a> and of course, <a onClick={props.toggleBTC} href="/#">Bitcoin</a>. <span className="btc" style={{display:'none'}}>bc1qwr33lgcx2ejwewtjsa9a2wscwyr98qwczetl68</span> <span style={{display:'none'}} id="tooltip" role="tooltip">Copied! <span id="arrow" data-popper-arrow></span></span><a href="/#" style={{display:'none'}} onClick={props.copyToClipboard} id="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-check" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </svg></a> <a style={{display:'block',paddingTop:5}} id="hideLink" href="/#" onClick={props.hideLink}><small>CLOSE</small> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
        </svg></a></small></p> 
        
        <a style={{display:'none'}} id="showLink" href="/#" onClick={props.showLink}><small>Show description</small></a>
        
        <p>Check out the <a target="_new" href="https://t.me/LifeStyleTrading_Bot?start=1wgcys1037">Lifestyle Trading Bot</a> on <a target="_new" href="https://telegram.org/">Telegram</a>. You can also checkout the <a target="_new" href="https://lifestyletrading.xyz/login/">online dashboard app</a> after you download Telegram and <a href="https://t.me/LifeStyleTrading_Bot?start=1wgcys1037">connect to the bot</a>.
        </p> 
        
        <div className="formFields">
          <table><tbody><tr>
        
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
        </tbody>
        </table>
        </div>
          
        <button onClick={props.handleClick}>Submit</button>
      </form>
    )
}
