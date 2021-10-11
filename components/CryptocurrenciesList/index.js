// Write your JS code here
// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/Circles'

import CurrencyItem from '../CryptocurrencyItem'

import './index.css'

class Tracker extends Component {
  state = {
    currencyData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getdata()
  }

  getdata = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)

    const FormatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))

    this.setState({
      currencyData: FormatedData,
      isLoading: false,
    })
  }

  renderTracker = () => {
    const {currencyData} = this.state
    return (
      <div className="CryptoCurrencyTracker">
        <h1 className="tracker">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency"
        />
        <ul className="currencyList">
          <div className="headings">
            <h1 className="Cointype">Coin type</h1>
            <div className="currencyContainer">
              <h1 className="Usd">USD</h1>
              <h1 className="euro">EURO</h1>
            </div>
          </div>
          {currencyData.map(eachItem => (
            <CurrencyItem key={eachItem.id} currencyDataitem={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader
              id="loader"
              type="Rings"
              color="#ffffff"
              height={80}
              width={80}
              className="Loader"
            />
          </div>
        ) : (
          this.renderTracker()
        )}
      </div>
    )
  }
}

export default Tracker
