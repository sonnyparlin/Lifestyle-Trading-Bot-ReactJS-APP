// client/src/App.js
import ReactJson from 'react-json-view';
import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      investment: '1000',
      years: '10',
      pocket: '0.25',
      strategy: {}
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleInvestmentChange = this.handleInvestmentChange.bind(this)
    this.handleYearsChange = this.handleYearsChange.bind(this)
    this.handlePocketChange = this.handlePocketChange.bind(this)
  }

  handleInvestmentChange(e) {
    this.setState({investment:e.target.value})
  }
  handleYearsChange(e) {
    this.setState({years:e.target.value})
  }
  handlePocketChange(e) {
    this.setState({pocket:e.target.value})
  }

  handleClick(e) {
    e.preventDefault();
    let url = 'https://ltbc.herokuapp.com/api?'
    url += `investment=${this.state.investment}&years=${this.state.years}&yearlypocket=${this.state.pocket}`

    fetch(url).then(response => response.json())
    .then(data => this.setState({strategy: JSON.parse(data)}));
  }

  render() {
    return (
      <div className="App">
        <h1>Lifestyle Trading Bot Strategy</h1>
        <form>
          <p>Enter numbers without commas (,) or dollar signs ($). Yearly Pocket is how much you plan to take out of your fund each year, it defaults to 25% (0.25), any number between 0 and 1 is acceptable (for 30% you would enter 0.30). Check out the Lifestyle Trading Bot bot <a href="https://t.me/LifeStyleTrading_Bot?start=1wgcys1037">here</a>.</p>
          
          <div className="formFields">
          <label>
            Investment (USD):
          </label>
          <input onChange={this.handleInvestmentChange} className="investment" type="text" id="investment" name="investment" /><br/>
          <label>
            Years (USD):
          </label>
            <input onChange={this.handleYearsChange} className="years" type="text" id="years" name="years" /><br/>
          
          <label>
            Yearly Pocket:
          </label>
            <input onChange={this.handlePocketChange} className="pocket" type="text" placeholder="0.25" name="pocket" />
          </div>
            
          <button onClick={this.handleClick}>Submit</button>
        </form>
        <ReactJson src={this.state.strategy} />
      </div>
    )
  }
}

export default App;